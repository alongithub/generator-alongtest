// generator入口

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname, // 自动取到了当前项目目录
            },

        ]).then(answer => {
            this.answer = answer;
        })
    }

    writing() {

        const filelist = ['index.html', 'package.json'];
        // yeoman 在生成文件阶段自动调用此方法
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        filelist.forEach(file => {
            // 通过模板引擎吸入文件到目标目录
            // 找到模板文件
            const tmpl = this.templatePath(file)
            // 输出目标路径
            const output = this.destinationPath(file);
            // 模板数据上下文
            const context = this.answer;


            this.fs.copyTpl(tmpl, output, context); 
        })
        
    }
}