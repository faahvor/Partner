const Registration = () => {
    const nigerianStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",
        "Bayelsa", "Benue", "Borno", "Cross River", "Delta",
        "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
        "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
        "Niger", "Ogun", "Ondo", "Osun", "Oyo",
        "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
        "Zamfara"
    ];
  return (
    <div className="flex flex-col items-center font-metro  pt-[7rem] h-full mb-[2rem] bg-white w-full ">
        <h1 className="font-bold text-[34.65px] mx-3 text-center mb-5">Ready to Propel Your Travel Business to New Heights?</h1>
        <p className="text-[25.02px]  px-[4rem]  text-[#667085] text-center lg:mx-0 lg::w-[868px]">Whether you're starting fresh or aiming for unprecedented growth, this is your chance to excel. Register now to access exclusive insights, innovative strategies, and powerful tools to drive your travel business forward with PartnerPlus Pro.</p>
    
    
            <form className="mx-8 md:mx-0">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name *</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full name"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@company.com"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number *</label>
                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="+234 000-000-0000"/>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location (State) *</label>
                        <select id="location" name="location" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option>Select an option</option>
                            {
                                nigerianStates.map((state)=>(
                                    <option key={state}>{state}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Please select the category that best describes you *</label>
                        <select id="category" name="category" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option>Select an option</option>
                            <option>staff</option>
                            <option>student</option>
                            <option>couple</option>
                            <option>family</option>
                            
                        </select>
                    </div>
                    <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Do you have any specific questions you'd like us to address during the webinar?</label>
                        <textarea id="question" name="question" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4"></textarea>
                    </div>
                </div>

                <div className="flex items-center mt-6">
                    <input type="checkbox" id="agree" name="agree" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                    <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">You agree to our friendly privacy policy.</label>
                </div>

                <button type="submit" className="mt-6 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                </button>
            </form>
    </div>
  )
}

export default Registration