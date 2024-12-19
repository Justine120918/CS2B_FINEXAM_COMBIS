let groceryStack = [];

function peek(stack) {
    if (stack.length === 0) {
            console.log("The stack is empty.");
                    return null;
                        } else {
                                console.log(`Top of the stack: ${stack[stack.length - 1]}`);
                                        return stack[stack.length - 1];
                                            }
                                            }

                                            function push(stack, item) {
                                                stack.push(item);
                                                    console.log(`Item "${item}" pushed to the stack.`);
                                                        peek(stack);
                                                            console.log("Current Stack:", stack);
                                                            }

                                                            function pop(stack) {
                                                                if (stack.length === 0) {
                                                                        console.log("The stack is empty. Cannot pop.");
                                                                                return null;
                                                                                    } else {
                                                                                            const removedItem = stack.pop();
                                                                                                    console.log(`Item "${removedItem}" popped from the stack.`);
                                                                                                            peek(stack);
                                                                                                                    console.log("Current Stack:", stack);
                                                                                                                            return removedItem;
                                                                                                                                }
                                                                                                                                }

                                                                                                                                for (let i = 0; i < 5; i++) {
                                                                                                                                    let item = prompt(`Enter grocery item ${i + 1}:`);
                                                                                                                                        push(groceryStack, item);
                                                                                                                                        }

                                                                                                                                        console.log("Removing items from the stack:");
                                                                                                                                        pop(groceryStack);
                                                                                                                                        pop(groceryStack);
