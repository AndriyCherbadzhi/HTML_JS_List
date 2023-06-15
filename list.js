let list = JSON.parse(localStorage.getItem('list'))
//     [
//     {
//         id: 1,
//         value: 'learn JS',
//         done: true
//     },
//     {
//         id: 2,
//         value: 'learn React',
//         done: false
//     },
//     {
//         id: 3,
//         value: 'learn App',
//         done: false
//     },
// ];

const listElement = document.getElementById('ulList');
const inputElement = document.getElementById('toDoInput');

function render() {
    list.forEach(el => {
            //create li list
            const listItem = document.createElement('li');
            listItem.setAttribute('class', el.done ? 'done' : 'progress')
            const listItemText = document.createTextNode(el.value);
            listItem.appendChild(listItemText);

            //create button done
            const buttonItem = document.createElement('button');
            buttonItem.setAttribute('id', el.id)
            const buttonItemText = document.createTextNode('Done');
            buttonItem.appendChild(buttonItemText);

            //crate button delete
            const buttonItemDelete = document.createElement('button');
            buttonItemDelete.setAttribute('id', el.id);
            const buttonDelete = document.createTextNode('Delete');
            buttonItemDelete.appendChild(buttonDelete);

            //glue it all together
            listItem.appendChild(buttonItem);
            listItem.appendChild(buttonItemDelete);

            listElement.appendChild(listItem);

        }
    );
}

render()

function updateLocalStorage() {
    localStorage.setItem('list', JSON.stringify(list))
}
function clear() {
    listElement.innerHTML = null;

}
function clearInput() {
    inputElement.value = ''


}

listElement.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.innerHTML === 'Done') {
            const clickedItemId = Number(e.target.id);

            // Find the item in the list based on the clicked ID
            const clickedItem = list.find(el => el.id === clickedItemId);

            // Toggle the 'done' property of the clicked item
            if (clickedItem) {
                clickedItem.done = !clickedItem.done;
            }

            clear();
            render();
            updateLocalStorage()

        } else if (e.target.innerHTML === 'Delete') {
            const clickedItemId = Number(e.target.id);

            const itemIndex = list.findIndex(el => el.id === clickedItemId);

            if (itemIndex !== -1) {
                list.splice(itemIndex, 1);
            }

            clear();
            render();
            updateLocalStorage()

        }
    }
});


function addToList() {
    if (inputElement.value !== '') {

        list.push({
            id: Math.random(),
            value: inputElement.value,
            done: false
        });

        updateLocalStorage()
        clearInput()
        clear()
        render()
    } else {
        clear()
        render()
    }
}
