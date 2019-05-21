const PARENT_ELEMENT_CLASS_ID = "menu-ctn";
const TARGET_OUT_ELEMENT_ID = "result";
const DROPDOWN_DEFAULT_STATE_CLASS = "off";
const MENU_ITEM_TAG = "li";
const MENU_DROPDOWN_TAG = "ul";
const CONTENT_ITEM_TAG = "a";

type itemType = {
    title: string,
    items?: Array<itemType>
}

const menuList:Array<itemType> = [
    { title: 'JavaScript', items: [
            {
                title: 'Angular'
            },
            {
                title:'React'
            }
        ] },
    { title: 'Dart', items: [
            {
                title: 'Angular'
            },
            {
                title: 'Polymer'
            },
            {
                title:'yy',
                items: [
                    {
                        title:'zzz'
                    },
                    {
                        title:'www'
                    },
                    {
                        title:'eee',
                        items:[]
                    }
                ]
            }
        ] }
];

function openMenu() {
    this.parentElement.classList.toggle("on");
    this.parentElement.classList.toggle("off");
}

function selectItem() {
    console.log(this.innerText);
    document.getElementById(TARGET_OUT_ELEMENT_ID).innerText=this.innerText;
}

function addMenu(parent:HTMLElement, content:Array<itemType>){
    content.forEach((item)=>{
        const currentItem = document.createElement(MENU_ITEM_TAG);
        const itemContent = document.createElement(CONTENT_ITEM_TAG);

        itemContent.innerText = item.title;
        currentItem.appendChild(itemContent);
        if(item.items){
            itemContent.addEventListener("click", openMenu);
            const menuContainer = document.createElement(MENU_DROPDOWN_TAG);
            currentItem.className = DROPDOWN_DEFAULT_STATE_CLASS;
            currentItem.appendChild(menuContainer);
            addMenu(menuContainer, item.items);
        }else {
            itemContent.addEventListener("click", selectItem);
        }
        parent.appendChild(currentItem)
    });
}

const parentElement = document.getElementById(PARENT_ELEMENT_CLASS_ID);
addMenu(parentElement, menuList);








