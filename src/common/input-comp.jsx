const InputComp = ({ name, label, type, placeholder, error }) => {
	return (
		<div className='flex flex-col gap-y-[6px] text-sm/5 w-full'>
			<label htmlFor={name} className='font-medium text-[#344054]'>
				{label} <span className='text-red-500'>*</span>
			</label>
			<input
				className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full'
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
			/>
			{error && <p className='text-red-500 text-xs'>{error}</p>}
		</div>
	);
};
export default InputComp;
