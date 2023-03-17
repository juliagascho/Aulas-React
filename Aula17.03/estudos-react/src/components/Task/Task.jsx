import "./Task.css"

// props de propriedades
// export function Task (props) {
//     let title = props.title;
//     let status = props.status;
//     let deadline = props.deadline;
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//             <div className="details">
//                 <span className="status">{status}</span>
//                 <span className="deadline">{deadline}</span>
//             </div>
//         </div>
//     );
// };

//ou:

// export function Task (props) {
//     let {title} = props; desestruturação
//     let {status} = props;
//     let {deadline} = props;
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//             <div className="details">
//                 <span className="status">{status}</span>
//                 <span className="deadline">{deadline}</span>
//             </div>
//         </div>
//     );
// };

// ou:

// export function Task (props) {
//     let { title, status, deadline } = props;
//     return (
//         <div className="task">
//             <strong>{title}</strong>
//             <div className="details">
//                 <span className="status">{status}</span>
//                 <span className="deadline">{deadline}</span>
//             </div>
//         </div>
//     );
// };

// ou

export function Task ({ title, status, deadline }) {
    return (
        <div className="task">
            <strong>
                {title}
            </strong>
            <div className="details">
                <span className="status">
                    {status}
                </span>
                <span className="deadline">
                    {deadline}
                </span>
            </div>
        </div>
    );
};

//ou 

// export function Task (props) {
//         return (
//         <div className="task">
//             <strong>{props.title}</strong>
//             <div className="details">
//                 <span className="status">{props.status}</span>
//                 <span className="deadline">{props.deadline}</span>
//             </div>
//         </div>
//     );
// };