import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";

const UploadBox = ({ label, extralabel, name, required, onChange }) => {
	const inputRef = useRef();
	const [fileName, setFileName] = useState("");
	const handleBoxClick = () => inputRef.current.click();
	const handleChange = (e) => {
		const file = e.target.files && e.target.files[0];
		setFileName(file ? file.name : "");
		if (onChange) onChange(e);
	};
	return (
		<div className='space-y-2 w-full text-sm/5 font-inter'>
			<label htmlFor={name} className=' text-[#344054] font-inter font-medium'>
				{label} <span className='text-[#8E8E8E]'>{extralabel}</span>
			</label>
			<div
				className='border border-[#EAECF0] rounded-xl bg-white px-4 py-6 flex flex-col items-center gap-2 cursor-pointer hover:border-[#F97316] transition mt-2'
				onClick={handleBoxClick}
				onDrop={(e) => {
					e.preventDefault();
					const files = e.dataTransfer.files;
					setFileName(files && files[0] ? files[0].name : "");
					if (onChange) onChange({ target: { name, files } });
				}}
				onDragOver={(e) => e.preventDefault()}>
				{fileName ? (
					<div className='flex flex-col items-center'>
						<div className='rounded-full bg-[#F2F4F7] p-3 mb-2'>
							<CloudUpload />
						</div>
						<span className='text-[#344054] font-medium'>{fileName}</span>
						<span className='text-xs text-[#98A2B3] mt-1'>File selected</span>
					</div>
				) : (
					<div className='flex flex-col items-center'>
						<div className='rounded-full bg-[#F2F4F7] p-3 mb-2'>
							<CloudUpload />
						</div>
						<p className='font-inter text-sm/5'>
							<span className='text-[#F97316] font-medium'>
								Click to upload
							</span>{" "}
							<span className='text-[#667085]'>or drag and drop</span>
						</p>
					</div>
				)}
				<input
					ref={inputRef}
					type='file'
					id={name}
					name={name}
					accept='.pdf,.doc,.docx'
					className='hidden'
					required={required}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default UploadBox;
