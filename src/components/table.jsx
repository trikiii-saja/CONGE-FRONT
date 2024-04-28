import React from 'react';

function TableRow({ id, reason, start, end, status }) {
      const statusColor = ""
      return (
            <tr>
                  <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{id}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800">{reason}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800">{start}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800">{end}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span className={`px-4 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-400 dark:text-green-900' :
                              status === 'denied' ? 'bg-red-100 text-red-800 dark:bg-red-400 dark:text-red-900' :
                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-400 dark:text-yellow-900'}`}>
                              {status}
                        </span>
                  </td>

            </tr>
      );
}

function TableComponent({ data }) {
      return (
            <div className="flex flex-col">
                  <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                              <div className="border rounded-lg shadow overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                          <thead className="bg-gray-50">
                                                <tr>
                                                      <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Conge Id</th>
                                                      <th className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Reason</th>
                                                      <th className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Start</th>
                                                      <th className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">End</th>
                                                      <th className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Status</th>
                                                </tr>
                                          </thead>
                                          <tbody className="divide-y divide-gray-200">
                                                {data.map((item, index) => (
                                                      <TableRow key={index} {...item} />
                                                ))}
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default TableComponent;
