// 获取表单和结果展示区域的 DOM 元素
const form = document.getElementById('quadratic-form');
const solutionArea = document.getElementById('solution-area');

// 为表单添加提交事件监听器
form.addEventListener('submit', function (e) {
    // 阻止表单的默认提交行为
    e.preventDefault();

    // 获取用户输入的 a、b、c 值
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // 检查输入是否有效
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        solutionArea.textContent = '请输入有效的数字。';
        return;
    }

    // 计算判别式
    const discriminant = b * b - 4 * a * c;

    // 根据判别式的值进行不同的处理
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                solutionArea.textContent = '方程有无数解。';
            } else {
                solutionArea.textContent = '方程无解。';
            }
        } else {
            const x = -c / b;
            solutionArea.textContent = `方程有一个解：x = ${x}`;
        }
    } else if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutionArea.textContent = `方程有两个不同的解：x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        solutionArea.textContent = `方程有一个重根：x = ${x}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        solutionArea.textContent = `方程有两个复数解：x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
});