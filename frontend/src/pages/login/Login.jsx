import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='w-full flex flex-col items-center justify-center min-h-screen bg-slate-900'>
			<div className='w-full max-w-md p-8 rounded-lg shadow-2xl bg-slate-800 border border-slate-700'>
				<h1 className='text-4xl font-bold text-center text-white mb-8'>
					Welcome Back
					<span className='text-blue-500'>!</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-sm font-medium text-slate-300 mb-2'>
							Username
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm font-medium text-slate-300 mb-2'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link 
						to='/signup' 
						className='text-sm text-slate-400 hover:text-blue-500 transition-colors block text-center'
					>
						Don't have an account? Sign up
					</Link>

					<button 
						className='w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
						disabled={loading}
					>
						{loading ? (
							<span className='flex items-center justify-center'>
								<svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
									<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
									<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
								</svg>
								Logging in...
							</span>
						) : (
							'Login'
						)}
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;


