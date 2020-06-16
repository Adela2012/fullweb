import { TEXT, PLACEMENT } from './const'

let nextUnitOfWork = null

let wipRoot = null

let currentRoot = null

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
    updateNode(node, props)
    return node
}

// function updateFunctionComponent(vnode, parentNode) {
//     console.log('vnode, parentNode', vnode, parentNode)
//     const { type, props } = vnode
//     let vvnode = type(props)
//     const node = createNode(vvnode, parentNode)
//     return node
// }

// function updateClassComponent(vnode, parentNode) {
//     const { type, props } = vnode
//     let cmp = new type(props)
//     let vvnode = cmp.render()
//     const node = createNode(vvnode, parentNode)
//     return node
// }

function updateFunctionComponent(fiber) {
    console.log('updateFunctionComponent', fiber)
    const { type, props } = fiber
    let children = [type(props)]
    reconcileChildren(fiber, children)
}

function updateClassComponent(fiber) {
    const { type, props } = fiber
    let cmp = new type(props)
    let children = [cmp.render()]
    reconcileChildren(fiber, children)
}

function updateNode(node, nextVal) {
    Object.keys(nextVal).filter(k => k !== 'children').forEach(k => {
        if (k.slice(0, 2) === 'on') {
            let eventName = k.slice(2).toLowerCase()
            node.addEventListener(eventName, nextVal[k])
        } else {
            node[k] = nextVal[k]
        }
    })
}

// function reconcileChildren(children, node) {
//     for (let i = 0; i < children.length; i++) {
//         let child = children[i]
//         if (Array.isArray(child)) {
//             for (let j = 0; j < child.length; j++) {
//                 render(child[j], node)
//             }
//         } else
//             render(child, node)
//     }
// }

let prevSilbling = null
function reconcileChildren(workInProgressFiber, children) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        let newFiber = {
            type: child.type,
            props: child.props,
            node: null,
            base: null,
            return: workInProgressFiber,
            effectTag: PLACEMENT
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
    while (nextUnitOfWork && deadline.timeRemaining() > 1) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    if (!nextUnitOfWork && wipRoot) {
        commitRoot()
    }
    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)


function commitRoot() {
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
    }
    commitWorker(fiber.child)
    commitWorker(fiber.sibling)
}

export default { render }