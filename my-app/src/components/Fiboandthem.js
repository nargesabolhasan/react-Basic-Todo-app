import { useCallback, useState } from 'react'

const Fibo = () => {
    const [number, setNumber] = useState(0)
    const [fibo, setFibo] = useState(0)
    const [them, setThem] = useState('green')
    //----------------------
    const changeTheme = () => {
        if (them == 'green') {
            setThem('blue')
        } else {
            setThem('green')
        }
    }
    //----------------------
    function fibsSum(n) {
        let fibo = [];
        if (n <= 0)
            return 0;
        fibo[0] = 0;
        fibo[1] = 1;
        let sum = fibo[0] + fibo[1];
        for (let i = 2; i <= n; i++) {
            fibo[i] = fibo[i - 1] +
                fibo[i - 2];
            sum += fibo[i];
        }
        return sum;
    }
    //----------------------
    const calcFibo = useCallback(
        () => {
            setFibo(fibsSum(number))
        }, [number])
    //----------------------
    return (
        <div style={{
            background: 'pink',
            marginTop: '50px',
            color: 'white'
        }}>
            <h4 style={{color: 'black'}}>sum of 1 to n (fibo):</h4>
            <input onChange={(e) => setNumber(e.target.value)} value={number}></input>
            <button onClick={() => calcFibo()}>calculate fibo</button>
            <button onClick={changeTheme}>change theme</button>
            <p style={{ background: them }}>{fibo}</p>
        </div>
    )
}
export default Fibo