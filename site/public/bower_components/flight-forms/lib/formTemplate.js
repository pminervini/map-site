define(function(){return function(t){var n=[],r=t||{},i=r.name,s=r.prompt,o=r.fields,u=r.submit,a=r.submitText;return n.push("<form"+jade.attrs({id:""+i+"","class":["form-horizontal"]},{id:!0})+">"),s&&n.push('<div class="form-heading">'+jade.escape((jade.interp=s)==null?"":jade.interp)+"</div>"),function(){var e=o;if("number"==typeof e.length)for(var t=0,r=e.length;t<r;t++){var i=e[t];i.defaultValue||(i.defaultValue=""),n.push("<div"+jade.attrs({name:""+i.name+"","class":["control-group"]},{name:!0})+'><div class="control-label">'+jade.escape((jade.interp=i.label)==null?"":jade.interp)+'</div><div class="controls">');switch(i.inputType){case"text":n.push("<input"+jade.attrs({type:"text",placeholder:""+i.defaultValue+"",name:""+i.name+""},{type:!0,placeholder:!0,name:!0})+"/>");break;case"password":n.push("<input"+jade.attrs({type:"password",placeholder:""+i.defaultValue+"",name:""+i.name+""},{type:!0,placeholder:!0,name:!0})+"/>");break;case"selection":n.push("<select"+jade.attrs({name:""+i.name+""},{name:!0})+">"),function(){var e=i.selections;if("number"==typeof e.length)for(var t=0,r=e.length;t<r;t++){var s=e[t],o=s.id||s.label,u=s.label;s==i.defaultValue?n.push("<option"+jade.attrs({value:""+(o||u)+"",selected:"selected"},{value:!0,selected:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>"):n.push("<option"+jade.attrs({value:""+(o||u)+""},{value:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>")}else{var r=0;for(var t in e){r++;var s=e[t],o=s.id||s.label,u=s.label;s==i.defaultValue?n.push("<option"+jade.attrs({value:""+(o||u)+"",selected:"selected"},{value:!0,selected:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>"):n.push("<option"+jade.attrs({value:""+(o||u)+""},{value:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>")}}}.call(this),n.push("</select>");break;case"paragraph":n.push("<textarea"+jade.attrs({name:""+i.name+""},{name:!0})+"></textarea>");break;case"static":n.push("<span"+jade.attrs({name:""+i.name+"","class":["field"]},{name:!0})+">"+jade.escape((jade.interp=i.value)==null?"":jade.interp)+"</span>");break;case"button":n.push("<a"+jade.attrs({href:""+i.href+"",name:""+i.name+"","class":["btn","btn-"+i.btnStyle+" "+i.classes+""]},{"class":!0,href:!0,name:!0})+">"+jade.escape((jade.interp=i.value)==null?"":jade.interp)+"</a>");break;default:console.log("Unrecognized field type:",i.inputType)}n.push('<span class="help-inline"></span></div></div>')}else{var r=0;for(var t in e){r++;var i=e[t];i.defaultValue||(i.defaultValue=""),n.push("<div"+jade.attrs({name:""+i.name+"","class":["control-group"]},{name:!0})+'><div class="control-label">'+jade.escape((jade.interp=i.label)==null?"":jade.interp)+'</div><div class="controls">');switch(i.inputType){case"text":n.push("<input"+jade.attrs({type:"text",placeholder:""+i.defaultValue+"",name:""+i.name+""},{type:!0,placeholder:!0,name:!0})+"/>");break;case"password":n.push("<input"+jade.attrs({type:"password",placeholder:""+i.defaultValue+"",name:""+i.name+""},{type:!0,placeholder:!0,name:!0})+"/>");break;case"selection":n.push("<select"+jade.attrs({name:""+i.name+""},{name:!0})+">"),function(){var e=i.selections;if("number"==typeof e.length)for(var t=0,r=e.length;t<r;t++){var s=e[t],o=s.id||s.label,u=s.label;s==i.defaultValue?n.push("<option"+jade.attrs({value:""+(o||u)+"",selected:"selected"},{value:!0,selected:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>"):n.push("<option"+jade.attrs({value:""+(o||u)+""},{value:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>")}else{var r=0;for(var t in e){r++;var s=e[t],o=s.id||s.label,u=s.label;s==i.defaultValue?n.push("<option"+jade.attrs({value:""+(o||u)+"",selected:"selected"},{value:!0,selected:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>"):n.push("<option"+jade.attrs({value:""+(o||u)+""},{value:!0})+">"+jade.escape((jade.interp=u)==null?"":jade.interp)+"</option>")}}}.call(this),n.push("</select>");break;case"paragraph":n.push("<textarea"+jade.attrs({name:""+i.name+""},{name:!0})+"></textarea>");break;case"static":n.push("<span"+jade.attrs({name:""+i.name+"","class":["field"]},{name:!0})+">"+jade.escape((jade.interp=i.value)==null?"":jade.interp)+"</span>");break;case"button":n.push("<a"+jade.attrs({href:""+i.href+"",name:""+i.name+"","class":["btn","btn-"+i.btnStyle+" "+i.classes+""]},{"class":!0,href:!0,name:!0})+">"+jade.escape((jade.interp=i.value)==null?"":jade.interp)+"</a>");break;default:console.log("Unrecognized field type:",i.inputType)}n.push('<span class="help-inline"></span></div></div>')}}}.call(this),u=="group"&&n.push('<div class="controls"><button type="submit" class="btn btn-primary">'+jade.escape((jade.interp=a)==null?"":jade.interp)+"</button></div>"),n.push("</form>"),n.join("")}})