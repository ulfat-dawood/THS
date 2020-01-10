//     var taskString = `.form-check
//   input#materialUnchecked.form-check-input(onchange='func()', type='checkbox')
// |             ${x.title}
// |             ${x.description}
// |             ${x.due}
// a(href='#')
//   i.fas.fa-trash(onclick="alert('TRASH')")`

    var TaskModel = require("../models/task");
    var finalView = ''

    let some = async () => {
      try{
        let tasks = await TaskModel.find({})
        tasks.map(x=>{
          finalView = finalView + `.form-check
  input#materialUnchecked.form-check-input(onchange='func()', type='checkbox')
|             ${x.title}
|             ${x.description}
|             ${x.due}
a(href='#')
  i.fas.fa-trash(onclick="alert('TRASH')")`
        })
        document.getElementbyID('tasks').innerHTML = finalView

      }catch(err){
        console.log(err)
      }
    }
    some();