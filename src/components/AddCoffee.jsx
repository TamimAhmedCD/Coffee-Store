const AddCoffee = () => {
  return (
    <div>
      Add a Coffee
      <form>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              name="name"
              type="email"
              placeholder="Coffee Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              name="quantity"
              type="email"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
