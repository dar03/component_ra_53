import React, { useState } from 'react';
import VideoList from './components/VideoList';
import { data } from './data';
import './css/index.css'

export default function App() {
  const [list, setList] = useState(data);

  return (
    <VideoList list={list} />
  );
}

// import React, {useState} from 'react';
// import './css/index.css'
// import { data } from './data';

// function DateTime(props) {
//     return (
//         <p className="date">{props.date}</p>
//     )
// }

// function Video(props) {
//     return (
//         <div className="video">
//             <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//             <DateTime date={props.date} />
//         </div>
//     )
// }

// function VideoList(props) {
//     return props.list.map(item => <Video url={item.url} date={item.date} />);
// }

// export default function App() {
//   const [list, setList] = useState(data);

//     return (
//         <VideoList list={list} />
//     );
// }