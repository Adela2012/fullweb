
const fs = require('fs')
const path = require('path')
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

module.exports = class webpack {

    constructor(options) {
        console.log(options)
        this.entry = options.entry;
        this.output = options.output
        this.modules = []
    }

    run() {
        const info = this.parse(this.entry)
        console.log('info', info)

        this.modules.push(info)

        for (let i = 0; i < this.modules.length; i++) {
            const item = this.modules[i];
            const { yilai } = item;
            if (yilai) {
                for (let j in yilai) {
                    this.modules.push(this.parse(yilai[j]));
                }
            }
        }

        //格式转换
        const obj = {};
        this.modules.forEach((item) => {
            obj[item.entryFile] = {
                yilai: item.yilai,
                code: item.code,
            };
        });
        this.file(obj);
    }

    // parse(entryFile) {

    //     const content = fs.readFileSync(entryFile, 'utf-8')
    //     // console.log('parse', content, entryFile)
    //     const ast = parser.parse(content, {
    //         sourceType: 'module'
    //     })
    //     // console.log('ast', ast)


    //     const yilai = {};
    //     traverse(ast, {
    //         ImportDeclaration({ node }) {
    //             const newPathName =
    //                 "./" + path.join(path.dirname(entryFile), node.source.value);
    //             yilai[node.source.value] = newPathName;
    //         },
    //     });

    //     // console.log('yilai', yilai)

    //     const { code } = transformFromAst(ast, null, {
    //         presets: ["@babel/preset-env"],
    //     });

    //     // console.log('code', code)

    //     return {
    //         entryFile,
    //         yilai,
    //         code
    //     }
    // }

    parse(entryFile) {
        const content = fs.readFileSync(entryFile, 'utf-8')
        const ast = parser.parse(content, {
            sourceType: 'module'
        })
        const yilai = {}
        traverse(ast, {
            ImportDeclaration({node}) {
                const newPathName = `./${path.join(path.dirname(entryFile), node.source.value)}`
                yilai[node.source.value] = newPathName
            }
        })
        const { code } = transformFromAst(ast, null, {
            presets: ['@babel/preset-env']
        })
        return {
            entryFile,
            yilai,
            code
        }
    }

    

    file(code) {
        const filePath = path.join(this.output.path, this.output.filename);
        const newCode = JSON.stringify(code);
        const bundle = `(function(graph){
        function require(module){
            function pathRequire(realtivePath){
               return require(graph[module].yilai[realtivePath])
            }
            var exports = {};
            (function(require,exports,code){
                eval(code)
            })(pathRequire,exports,graph[module].code)
            return exports;
        }
        require('${this.entry}')
    })(${newCode})`;

        //./src/index.js
        // require("./b.js");
        fs.writeFileSync(filePath, bundle, "utf-8");
    }

}