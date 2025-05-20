
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";
import { CheckCircle } from "lucide-react";

const AdmissionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Admission</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Begin your journey to a successful career in information technology by applying to our BSc CSIT and BCA programs.
          </p>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Admission Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-campus-blue dark:text-blue-400 rounded-full mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Application Submission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete and submit the online application form along with required documents.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-campus-blue dark:text-blue-400 rounded-full mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Entrance Examination</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Successfully complete the entrance examination testing your aptitude and subject knowledge.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-campus-blue dark:text-blue-400 rounded-full mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Interview & Admission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Attend the interview, receive your admission offer, and complete the registration process.
                </p>
              </div>
            </div>
            
            {/* Eligibility & Dates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-campus-blue p-6">
                  <h3 className="text-xl font-bold text-white">Eligibility Criteria</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>BSc CSIT:</strong> 10+2 or equivalent with minimum 50% aggregate in Physics, Chemistry, and Mathematics.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>BCA:</strong> 10+2 or equivalent with minimum 45% aggregate with Mathematics as a compulsory subject.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Good performance in entrance examination conducted by the college.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Basic aptitude for computer programming and problem-solving.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-campus-blue p-6">
                  <h3 className="text-xl font-bold text-white">Important Dates</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Application Opens</span>
                      <span className="text-campus-blue dark:text-blue-400 font-medium">May 15, 2023</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Application Deadline</span>
                      <span className="text-campus-blue dark:text-blue-400 font-medium">June 30, 2023</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Entrance Examination</span>
                      <span className="text-campus-blue dark:text-blue-400 font-medium">July 10, 2023</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Interview Rounds</span>
                      <span className="text-campus-blue dark:text-blue-400 font-medium">July 15-20, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Classes Begin</span>
                      <span className="text-campus-blue dark:text-blue-400 font-medium">August 1, 2023</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            
            {/* Required Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12">
              <div className="bg-campus-blue p-6">
                <h3 className="text-xl font-bold text-white">Required Documents</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Completed application form</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">10th and 12th mark sheets and certificates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Transfer certificate from previous institution</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Migration certificate (if applicable)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Character certificate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Recent passport-sized photographs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Valid ID proof (National Identity Card, passport,CitizenShip etc.)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300">Category certificate (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Online Application Form</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:p-8">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Fee Structure
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Fee Structure</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-campus-blue p-4">
                  <h3 className="text-lg font-bold text-white">BSc CSIT Program</h3>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3">Fee Type</th>
                        <th className="text-right py-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Admission Fee (One Time)</td>
                        <td className="text-right">$1,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Tuition Fee (Per Semester)</td>
                        <td className="text-right">$1,500</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Laboratory Fee (Per Semester)</td>
                        <td className="text-right">$300</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Library Fee (Per Year)</td>
                        <td className="text-right">$200</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Examination Fee (Per Semester)</td>
                        <td className="text-right">$150</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold">Total (First Semester)</td>
                        <td className="text-right font-bold">$3,150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-campus-blue p-4">
                  <h3 className="text-lg font-bold text-white">BCA Program</h3>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3">Fee Type</th>
                        <th className="text-right py-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Admission Fee (One Time)</td>
                        <td className="text-right">$800</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Tuition Fee (Per Semester)</td>
                        <td className="text-right">$1,300</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Laboratory Fee (Per Semester)</td>
                        <td className="text-right">$250</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Library Fee (Per Year)</td>
                        <td className="text-right">$180</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3">Examination Fee (Per Semester)</td>
                        <td className="text-right">$120</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold">Total (First Semester)</td>
                        <td className="text-right font-bold">$2,650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                * Fee structure is subject to change. Please contact the admission office for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Scholarships */}
      {/* <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Scholarships</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-campus-blue dark:text-blue-400">Merit Scholarship</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Students with outstanding academic performance in their qualifying examination are eligible for merit scholarships.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">90% and above: 50% tuition fee waiver</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">80-89%: 30% tuition fee waiver</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">70-79%: 15% tuition fee waiver</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-campus-blue dark:text-blue-400">Need-Based Financial Aid</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We offer financial assistance to deserving students from economically disadvantaged backgrounds.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Interested students can apply for need-based financial aid by submitting the required documents along with their application. The financial aid committee reviews each application and determines the amount of assistance based on the student's financial need and academic potential.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-campus-blue dark:text-blue-400">Women in Technology Scholarship</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To encourage female students in IT education, we offer special scholarships for female applicants with strong academic records.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Female students with at least 70% marks in their qualifying examination are eligible for a 20% tuition fee waiver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}
      <Footer />
    </div>
  );
};

export default AdmissionPage;
