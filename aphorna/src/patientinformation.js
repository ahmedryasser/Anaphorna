export default function form() {
    return (
        <div lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Form</title>
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="css/form.css" />
          </head>
          <body class="h-screen bg-gray-100">
            <div class="w-full h-screen">
              <div class="w-3/5 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 mt-24 h-a overscroll-y-contain no-scrollbar">
                <div class="header flex justify-between mb-8">
                  <h1 class="text-2xl text-black-500 hover:text-black-500 transition duration-500">
                    Patient Details </h1>
                  <a href="#" class="text-black-400 hover:text-black-600 transition duration-500">
                    <svg
                      class="w-6 h-6 inline-block align-bottom"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Back to Home
                    <i class="fas fa-chevron-circle-left fa-fw"></i>
                  </a>
                </div>
                <form class="space-y-4 text-gray-700">
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-2 md:w-1/2">
                      <label class="block mb-1" for="name"
                        >First name<span class="text-red-500">*</span></label>
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="name"/>
                    </div>
                    <div class="w-full px-2 md:w-1/2">
                      <label class="block mb-1" for="last"
                        >Last name<span class="text-red-500">*</span></label >
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="last"/>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-2 md:w-1/2">
                      <label class="block mb-1" for="phone"
                        >Phone no<span class="text-red-500">*</span></label>
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="tel"
                        id="phone"/>
                    </div>
                    <div class="w-full px-2 md:w-1/2">
                      <label class="block mb-1" for="dob"
                        >Date of birth<span class="text-red-500">*</span></label >
                      <div class="relative">
                        <div
                          class="flex absolute inset-y-0 right-0 pr-4 items-center pl-3 pointer-events-none">
                          <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          datepicker
                          type="date"
                          class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          placeholder="Select date"
                          id="dob"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-2 md:w-1/3">
                      <label class="block mb-1" for="gender"
                        >Gender<span class="text-red-500">*</span></label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="gender">
                          <option>Prefer not to say</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <div
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div class="w-full px-2 md:w-1/3">
                      <label class="block mb-1" for="medication"
                        >Any Medications<span class="text-red-500">*</span></label>
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="medication"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-2 md:w-1/3">
                      <label class="block mb-1" for="address">Address Line</label>
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="address" />
                    </div>
                    
                    <div class="w-full px-2 md:w-1/3">
                      <label class="block mb-1" for="city"
                        >City<span class="text-red-500">*</span></label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="state">
                          <option>DC</option>
                          <option>California</option>
                          <option>Ohio</option>
                        </select>
                        <div
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </div>
                      </div>
                     </div>
                     <div class="w-full px-2 md:w-1/3">
                        <label class="block mb-1" for="country"
                          >Country<span class="text-red-500">*</span></label>
                        <input
                          class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="text"
                          id="country"/>
                      </div>
                  </div>
                  
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-2 md:w-1/3">
                      <label class="block mb-1" for="data"
                        >Recent EEG Data<span class="text-red-500">*</span></label >
                      <input
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="data"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div class="w-full px-0 md:w-3/4">
                      <div class="h-full px-2 md:w-3/3">
                      <label class="block mb-1" for="description"
                        >Description<span class="text-red-500">*</span></label>
                      <textarea
                        class="text-base placeholder-gray-600 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        id="description"
                      ></textarea>
                    </div>
                  </div>
                 
                  </div>
                </form>
                <div class="footer flex justify-between mt-12">
                  <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-0.5 px-4 rounded" type="button">
                    Cancel </button>
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-0.5 px-4 rounded"
                    type="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
            <script src="js/form1.js"></script>
          </body>
        </div>
        
    );
}