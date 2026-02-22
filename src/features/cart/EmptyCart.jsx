import Button from '../../ui/Button';
function EmptyCart({ isFullPage = true, setIsOpen }) {
  const containerStyle = isFullPage
    ? 'flex flex-grow items-center justify-center pt-40 flex-col pb-8 '
    : 'flex flex-grow items-center justify-center pt-20';

  return (
    <div className={containerStyle}>
      <p className="text-sm font-medium text-stone-500">
        Add items to start your order. :)
      </p>
      {isFullPage && (
        <div className="mt-10">
          <Button
            type="primary"
            to="/menu"
            onClick={() => setIsOpen(false)}
          >
            Explore our Menu
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyCart;
