/* eslint-disable react/prop-types */
const Input = ({ placeHolder, type, name, register, error }) => {
  return (
    <div className=" mb-5">
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        {...register(name)}
        className={`w-full h-10 pl-3 bg-transparent border-b-[1px] border-gold outline-none placeholder:text-gold placeholder:text-opacity-60 ${
          error ? " border-b-[1px] border-red-600" : ""
        } `}
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
