import { TEXT, PLACEMENT, UPDATE, DELETION } from './const'

let nextUnitOfWork = null

let wipRoot = null

let currentRoot = null


let deletions = []

function render(vnode, container) {
    // const node = createNode(vnode, container);
    // container.appendChild(node)

    wipRoot = {
        node: container,
        props: {
            children: [vnode]
        },
        base: currentRoot
    }
    nextUnitOfWork = wipRoot
    deletions = []
}

function createNode(vnode, parentNode) {
    let node = null

    const { type, props } = vnode
    if (type === TEXT) {
        node = document.createTextNode('')
    } else if (typeof type === 'string') {
        node = document.createElement(type)
    } else if (typeof type === 'function') {
        node = type.isReactComponent
            ? updateClassComponent(vnode, parentNode)
            : updateFunctionComponent(vnode, parentNode)
    } else if (type === undefined) {
        node = document.createDocumentFragment()
    }

    // reconcileChildren(props.children, node)
    updateNode(node, {}, props)
    return node
}

function updateFunctionComponent(fiber) {
    wipFiber = fiber
    wipFiber.hooks = []
    hookIndex = 0
    console.log('updateFunctionComponent', fiber)
    const { type, props } = fiber
    let children = [type(props)]
    reconcileChildren(fiber, children)
}

function updateClassComponent(fiber) {
    const { type, props } = fiber
    let cmp = new type(props)
    const children = [cmp.render()]
    reconcileChildren(fiber, children)
}

function updateNode(node, prevVal, nextVal) {
    Object.keys(prevVal).filter(k => k !== 'children').forEach(k => {
        if (k.slice(0, 2) === 'on') {
            let eventName = k.slice(2).toLowerCase()
            node.removeEventListener(eventName, nextVal[k])
        } else {
            if (!(k in nextVal)) node[k] = ""
        }
    })
    Object.keys(nextVal).filter(k => k !== 'children').forEach(k => {
        if (k.slice(0, 2) === 'on') {
            let eventName = k.slice(2).toLowerCase()
            node.addEventListener(eventName, nextVal[k])
        } else {
            node[k] = nextVal[k]
        }
    })
}

function reconcileChildren(workInProgressFiber, children) {
    let prevSilbling = null
    let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        const sameType = child && oldFiber && child.type === oldFiber.type
        let newFiber
        if (sameType) {
            newFiber = {
                type: child.type,
                props: child.props,
                node: oldFiber.node,
                base: oldFiber,
                return: workInProgressFiber,
                effectTag: UPDATE
            }
        }
        if (!sameType && child) {
            newFiber = {
                type: child.type,
                props: child.props,
                node: null,
                base: null,
                return: workInProgressFiber,
                effectTag: PLACEMENT
            }
        }
        if (!sameType && oldFiber) {
            oldFiber.effectTag = DELETION
            deletions.push(oldFiber)
        }

        if (oldFiber) {
            oldFiber = oldFiber.sibling
        }

        if (i === 0) {
            workInProgressFiber.child = newFiber
        } else {
            prevSilbling.sibling = newFiber
        }
        prevSilbling = newFiber
    }
}

function updateHostComponent(fiber) {
    if (!fiber.node) {
        fiber.node = createNode(fiber)
    }
    const { children } = fiber.props
    reconcileChildren(fiber, children)
}

function performUnitOfWork(fiber) {
    const { type } = fiber
    if (typeof type === 'function') {
        type.isReactComponent
            ? updateClassComponent(fiber)
            : updateFunctionComponent(fiber)
    } else {
        updateHostComponent(fiber)
    }

    if (fiber.child) {
        return fiber.child
    }

    let nextFiber = fiber
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.return
    }
}

function workLoop(deadline) {
    let index = 0 
    while (nextUnitOfWork && deadline.timeRemaining() > 1) {
        console.log(index++, 'nextUnitOfWork', nextUnitOfWork)
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }
    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)


function commitRoot() {
    deletions.forEach(commitWorker)
    commitWorker(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}

function commitWorker(fiber) {
    if (!fiber) {
        return
    }
    let parentNodeFiber = fiber.return
    while (!parentNodeFiber.node) {
        parentNodeFiber = parentNodeFiber.return
    }
    let parentNode = parentNodeFiber.node
    if (fiber.effectTag === PLACEMENT && fiber.node !== null) {
        parentNode.appendChild(fiber.node)
    } else if (fiber.effectTag === UPDATE && fiber.node !== null) {
        updateNode(fiber.node, fiber.base.props, fiber.props)
    } else if (fiber.effectTag === DELETION && fiber.node !== null) {
        commitDeletions(fiber, parentNode)
    }
    commitWorker(fiber.child)
    commitWorker(fiber.sibling)
}

function commitDeletions(fiber, parentNode) {
    if (fiber.node) {
        parentNode.removeChild(fiber.node)
    } else {
        commitDeletions(fiber.child, parentNode)
    }
}

let wipFiber = null
let hookIndex = null
export function useState(init) {
    const oldHook = wipFiber.base && wipFiber.base.hooks[hookIndex]
    const hook = {
        state: oldHook ? oldHook.state : init,
        queue: []
    }

    const actions = oldHook ? oldHook.queue : []

    actions.forEach(action => {
        hook.state = action;
    })


    const setState = (action) => {
        hook.queue.push(action)
        wipRoot = {
            node: currentRoot.node,
            props: currentRoot.props,
            base: currentRoot
        }
        nextUnitOfWork = wipRoot
        deletions = [];
    }


    wipFiber.hooks.push(hook)
    hookIndex++

    return [hook.state, setState]
}

export default { render }