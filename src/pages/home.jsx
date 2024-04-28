import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomNavbar from '../components/elements/customNavbar';
import Avatar from '../components/elements/avatar/avatar';
import TableComponent from '../components/table';
import Button from '../components/elements/button/button';
import ava from '../assets/Avatar.png';

// Function to fetch congés data from the API
async function fetchCongesData(userId, setConges) {
      try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/conges?user_id=${userId}`);
            if (!response.ok) {
                  throw new Error('Échec de récupération des données de congé');
            }
            const data = await response.json();
            setConges(data.data);
      } catch (error) {
            console.error(error);
      }
}

function Main() {
      const location = useLocation();
      const userData = location.state?.user;
      const [conges, setConges] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
            if (userData) {
                  fetchCongesData(userData.id, setConges);
            }
      }, [userData]);

      const goCongeForm = () => {
            navigate("/leave-request-form", { state: { user: userData } });
      };

      return (
            <div className="my-4 container mx-auto h-full">
                  {userData && (
                        <div className="flex h-full mx-4">
                              <div className="grid w-3/12 sm:w-3/12 text-black border-2 rounded-lg">
                                    <div className="justify-self-center">
                                          <Avatar imageUrl={ava} />
                                    </div>
                                    <div className="px-6 py-4">
                                          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{userData.name}</h1>
                                          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M14 11H10V13H14V11Z" />
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                                </svg>
                                                <h1 className="px-2 text-sm">{userData.job.title}</h1>
                                          </div>
                                          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path id="company-small-24px-2" data-name="company-small-24px" d="M16,4H2A2.006,2.006,0,0,0,0,6V24H18V6A2.006,2.006,0,0,0,16,4ZM8,22V18h2v4Zm8,0H12V17a.945.945,0,0,0-1-1H7a.945.945,0,0,0-1,1v5H2V6H16ZM8,10H6V8H8Zm4,0H10V8h2ZM8,14H6V12H8Zm4,0H10V12h2Z" transform="translate(3 -2)" />
                                                      <rect id="Retângulo_222" data-name="Retângulo 222" width="24" height="24" fill="none" opacity="0" />
                                                </svg>
                                                <h1 className="px-2 text-sm">{userData.job.company.name}</h1>
                                          </div>
                                          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                                                </svg>
                                                <h1 className="px-2 text-sm">{userData.email}</h1>
                                          </div>
                                          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                <svg aria-label="email icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z" fill="#000000" />
                                                </svg>
                                                <h1 className="px-2 text-sm">{userData.phone_number}</h1>
                                          </div>
                                    </div>
                              </div>
                              <div className="w-1/12 sm:w-1/12 text-black h-96 px-4"></div>
                              <div className="w-8/12 sm:w-8/12 text-black h-96 px-4 border-2 rounded-lg">
                                    <div className="flex flex-col mt-6">
                                          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                      <div className="overflow-hidden  dark:border-gray-700 md:rounded-lg">
                                                            <TableComponent data={conges} />
                                                            <div className="h-10"></div>
                                                            <Button buttonText="Demander un congé" fullWidth={false} onClick={goCongeForm} />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
}

function Home() {
      return (
            <div className="h-full roboto">
                  <CustomNavbar />
                  <Main />
            </div>
      );
}

export default Home;
