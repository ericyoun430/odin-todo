import {refreshNumberOfOpenItems, addProject} from "./projectDomManipulation";

class Project {
    constructor(name, itemList, count) {
        this.name = name;
        this.count = count.toString();
        this.itemList = itemList;
        this.numberOfOpenItems = itemList.length.toString();
        addProject(this.name, this.count)
    }

    addItem(item) {
        this.itemList.push(item);
        this.numberOfOpenItems+=1;

        //Refresh the number of open items 
        refreshNumberOfOpenItems(`.project-${this.count}`,this.numberOfOpenItems);
    }

    removeItem(item) {
        for (let i = 0; i < this.itemList.length; i++) {
            if (this.itemList[i] === item) {
                this.itemList.pop(i);
                break;
            }
        }
        this.numberOfOpenItems-=1;

        //Refresh the number of open items 
        refreshNumberOfOpenItems(`project-${this.count}`,this.numberOfOpenItems);
    }
}

export default Project;