The solution involves ensuring that the asynchronous operation waits for the database write operation to complete.  This can be achieved using promises or async/await. Here's the corrected code using async/await:

```javascript
async function writeData(data) {
  try {
    await db.collection('myCollection').add(data);
    console.log('Data written successfully!');
  } catch (error) {
    console.error('Error writing data:', error);
  }
}

// Example usage:
async function myAsyncFunction() {
  await writeData({ name: 'John Doe' });
  console.log('Async function completed!'); 
}
myAsyncFunction();
```
This ensures that the `myAsyncFunction` will wait for the database write to complete before logging 'Async function completed!'.