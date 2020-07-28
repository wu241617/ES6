(function(){
// ES5中
function log(x,y){
    if(y === 'undefined'){
        y = y || 'world';
    }
    console.log(x, y);
}
log('hello');
log('hello','wuhao');
log('hello','');
// ES6中
const newLog = (x, y='world') => {
    console.log(x, y);
}
newLog('hello');
newLog('hello', 'wuhao');
newLog('hello', '');
})()

const funLength = ([...prop]) => console.log(prop.length);
funLength([1,2,3,4]);