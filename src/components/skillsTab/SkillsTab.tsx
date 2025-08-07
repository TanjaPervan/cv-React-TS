//         <div className={styles.tabSection}>
//           <div className={styles.tabTitles}>
//             <p
//               className={`${styles.tabLink} ${activeTab === 'skills' ? styles.active : ''}`}
//               onClick={() => setActiveTab('skills')}
//             >
//               Skills
//             </p>
//             <p
//               className={`${styles.tabLink} ${activeTab === 'experience' ? styles.active : ''}`}
//               onClick={() => setActiveTab('experience')}
//             >
//               Experience
//             </p>
//             <p
//               className={`${styles.tabLink} ${activeTab === 'education' ? styles.active : ''}`}
//               onClick={() => setActiveTab('education')}
//             >
//               Education
//             </p>
//           </div>

//           <div className={styles.tabContent}>
//             {activeTab === 'skills' && (
//               <ul>
//                 {skillGroups.map((group, i) => (
//                   <li key={i}>
//                     {group.map((skill, j) => (
//                       <span className={styles.skillGroup} key={j}>{skill}</span>
//                     ))}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {activeTab === 'experience' && (
//               <ul>
//                 {experienceItems.map((exp, i) => (
//                   <li key={i}>
//                     <span className={styles.silverText}>{exp.title}</span>
//                     <span className={styles.jobCompany}>{exp.company}</span>
//                     <span className={styles.jobDates}>{exp.dates}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {activeTab === 'education' && (
//               <ul>
//                 {educationItems.map((edu, i) => (
//                   <li key={i}>
//                     <span className={styles.silverText}>{edu.title}</span>
//                     <span className={styles.degree}>{edu.degree}</span>
//                     <span className={styles.school}>{edu.school}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
