/*creating the node class
the node takes a value and a pointer to the next node
setting up the value of the node and the next node that is "linked to it"*/

class Node {
    constructor(data, nextPointer) {
        this.data = data;
        this.nextNode = nextPointer;
    }
}

/*
the linked list has a head and a next node.
the head is a node that is the first node in the list
**/

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.data = value;
            this.head.nextNode = node;

        }
    } //! the tail of the list

    pop() {
        // The node before the last node becomes the last node
        if (!this.head) {
            console.log("The list is empty");
            return null;
        }
        if (this.head === this.tail) {  //if there is one node in the list
            this.head = this.tail = null;
            return;
        }
        // Checks for the last node
        // loops through the list until it finds the second to last node, the (lastNode.tail == true)
        // it then sets the second to last node to be the new tail
        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        // Remove the last node
        const lastNode = currentNode.nextNode;
        currentNode.nextNode = null;
        this.tail = currentNode;

        return lastNode; // Return the node that was removed

    } //! removes the last node

    shift() {
        if (!this.head) {
            console.log("The list is empty");
            return null;
        }
        if (this.head === this.tail) {  //if there is one node in the list
            this.head = this.tail = null;
        }

        let currentNode = this.head;
        this.head = currentNode.nextNode;
        return currentNode;


    } //! removes the first node

    unshift(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head = node; // the new node becomes the head
            node.nextNode = this.head; // the new node points to the old head
        }
    } //! adds a new node to the beginning of the list

    get(index) {
        if (!this.head) {
            console.log("The list is empty");
            return null;
        }

        let currentNode = this.head;
        // checks if the node exists or not
        for (let i = 0; i < index; i++) {
            if (currentNode === null) {
                console.log("The index is out of bounds");
            }
            // sets the node with the given index
            currentNode = currentNode.nextNode;
        }
        // if the current node at the index has data or not
        return currentNode ? currentNode.data : null;

    } //! returns the value of a node at a specific index

    set(index, value) {

        let newNode = new Node(value, null);
        // checks if the list is empty sets the node to the only node in the list
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        let currentNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            // the index is out of bound or the list is empty
            if (currentNode === null) {
                console.log("The index is out of bounds");
                return;
            }

            currentNode = currentNode.nextNode;
        }

        // Handle insertion at the end or update existing node
        if (currentNode.nextNode === null) { // Insert at the end
            currentNode.nextNode = newNode;
            this.tail = newNode;
        } else { // Update existing node
            currentNode.nextNode.data = value; // Update data of the target node
        }
    } //! sets the value of a node at a specific index

    insert(index, value) {

    } //adds a new node at a specific index

    remove(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            // the index is out of bound or the list is empty
            if (currentNode === null) {
                console.log("The index is out of bounds");
                return;
            }

            currentNode = currentNode.nextNode;
        }
    } //removes a node at a specific index

    reverse() {
        if (!this.head) {
            console.log("The list is empty");
            return null;
        } else {
        }
    } //reverses the list

}

const ll = new LinkedList();
