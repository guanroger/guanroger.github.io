
const ToggleButton = ({setOpen}) => {
  return <button onClick={() => setOpen((prev) => !prev)}>
    <a whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>💎</a>
    
  </button>;
};

export default ToggleButton;