const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex gap-4 justify-center'>
			<div className='form-control'>
				<label 
					className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg transition-colors ${
						selectedGender === "male" 
							? "bg-blue-600 text-white" 
							: "bg-slate-700 text-slate-300 hover:bg-slate-600"
					}`}
				>
					<span className='font-medium'>Male</span>
					<input
						type='checkbox'
						className='checkbox checkbox-primary border-slate-400'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label 
					className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg transition-colors ${
						selectedGender === "female" 
							? "bg-blue-600 text-white" 
							: "bg-slate-700 text-slate-300 hover:bg-slate-600"
					}`}
				>
					<span className='font-medium'>Female</span>
					<input
						type='checkbox'
						className='checkbox checkbox-primary border-slate-400'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

// STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;
