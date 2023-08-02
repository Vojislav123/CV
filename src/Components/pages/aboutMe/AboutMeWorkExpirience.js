import EtihadLogo from '../../../images/EtihadLogo.png';
import PahuljicaLogo from '../../../images/PahuljicaLogo.png';



const WorkExpirience = () => {
	return (
		<div className='py-8'>
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold'>Work Experience</h1>
			</div>

			<div className='flex items-center justify-center mx-auto max-w-[768px] text-black bg-white rounded-xl space-x-8 mb-8'>
				<div className='flex flex-col py-[40px] '>
					<h2 className='text-2xl font-bold mb-2'>Pahuljica MVN</h2>
					<p>Local company in Belgrade selling frozen food products.</p>
					<p>Founder, Manager, Salesperson.</p>
				</div>
				<img src={PahuljicaLogo} alt='Pahuljica Logo' className='w-auto h-16' />
			</div>

			<div className='flex items-center justify-center mx-auto max-w-[768px] bg-white rounded-xl text-black space-x-8 mb-8'>
				<div className='flex flex-col py-[40px]'>
					<h2 className='text-2xl font-bold mb-2'>Etihad Airways</h2>
					<p>National airline of the United Arab Emirates.</p>
					<p>Call center operator, ticketing, training new recruits.</p>
				</div>
				<img src={EtihadLogo} alt='Etihad Logo' className='w-auto h-16' />
			</div>

			<p className='text-center mt-[60px]'>
				For over 10 years, I was in sales or customer service and have learned
				how to be a team player and transfer my knowledge to others.
			</p>
			<p className='text-center'>
				Other companies I worked for include Telenor and some others, which can
				be found in my CV.
			</p>
		</div>
	);
};

export default WorkExpirience;
