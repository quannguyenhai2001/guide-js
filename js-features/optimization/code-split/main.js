const handleClick = async () => {
    // Import Module B bằng dynamic import
    const moduleA = await import('./file-a.js');
    const moduleB = await import('./file-b.js');

    // Gọi function từ Module B
    moduleA.funcA();
    moduleB.funcB();
};

// Button event listener
const button = document.getElementById('button');
button.addEventListener('click', handleClick);