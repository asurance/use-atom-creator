# Use Atom Creator

> 简单地在React组件级别创建atom并使用

## 快速上手

### 安装依赖

```bash
npm install use-atom-creator
# or
yarn add use-atom-creator
# or
pnpm add use-atom-creator
```

### 使用
```tsx pure
const App = () => {
  const countAtom = useAtomCreator(0);
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```
