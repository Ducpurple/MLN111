import React, { useState } from 'react';
import './App.css';
import Concepts from './Concepts';
import Quiz from './Quiz';

// Dữ liệu cho toàn bộ ứng dụng
const philosophersData = [
  {
    name: 'Plato',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/800px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    bio: 'Plato (khoảng 428/427 hoặc 424/423 – 348/347 TCN) là một nhà triết học người Athens trong thời kỳ Cổ điển ở Hy Lạp cổ đại, người sáng lập trường phái tư tưởng Platon và Học viện, cơ sở giáo dục đại học đầu tiên trong thế giới phương Tây.',
    majorWorks: 'Cộng hòa, Phaedo, Symposium, Biện hộ',
    coreIdeas: 'Lý thuyết về các Hình thức, sự bất tử của linh hồn, nhà nước lý tưởng do các vị vua-triết gia cai trị.',
    quiz: [
      {
        question: "Trường học do Plato sáng lập tên là gì?",
        options: ["Lyceum", "Học viện (The Academy)", "Khu vườn (The Garden)", "Stoa"],
        correctAnswer: "Học viện (The Academy)",
      },
      {
        question: "Đâu là một tác phẩm chính của Plato?",
        options: ["Đạo đức học Nicomachean", "Cộng hòa (The Republic)", "Suy tưởng", "Leviathan"],
        correctAnswer: "Cộng hòa (The Republic)",
      },
      {
        question: "Lý thuyết về các Hình thức lý tưởng của Plato là gì?",
        options: [
          "Ý tưởng cho rằng mọi thứ đều được làm từ nước",
          "Khái niệm cho rằng có những hình thức hoàn hảo và không thay đổi của mọi vật trong một thực tại cao hơn",
          "Niềm tin rằng hạnh phúc là điều tốt đẹp nhất",
          "Lý thuyết cho rằng kiến thức chỉ đến từ kinh nghiệm cảm tính",
        ],
        correctAnswer: "Khái niệm cho rằng có những hình thức hoàn hảo và không thay đổi của mọi vật trong một thực tại cao hơn",
      },
    ],
  },
  {
    name: 'Aristotle',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg',
    bio: 'Aristotle (384–322 TCN) là một nhà triết học và bác học người Hy Lạp trong thời kỳ Cổ điển ở Hy Lạp cổ đại. Được Plato dạy dỗ, ông là người sáng lập Lyceum, trường phái triết học Peripatetic và truyền thống Aristotle.',
    majorWorks: 'Đạo đức học Nicomachean, Chính trị, Siêu hình học, Thi pháp',
    coreIdeas: 'Đạo đức đức hạnh, bốn nguyên nhân, trung dung vàng, logic và tam đoạn luận.',
    quiz: [],
  },
  {
    name: 'Immanuel Kant',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Immanuel_Kant_%28painted_portrait%29.jpg',
    bio: 'Immanuel Kant (1724–1804) là một nhà triết học người Đức và là một trong những nhà tư tưởng trung tâm của thời kỳ Khai sáng. Các tác phẩm toàn diện và có hệ thống của Kant về nhận thức luận, siêu hình học, đạo đức học và mỹ học đã khiến ông trở thành một trong những nhân vật có ảnh hưởng nhất trong triết học phương Tây hiện đại.',
    majorWorks: 'Phê phán lý tính thuần túy, Nền tảng siêu hình học của đạo đức, Phê phán lý tính thực tiễn',
    coreIdeas: 'Chủ nghĩa duy tâm siêu nghiệm, mệnh lệnh phạm trù, sự phân biệt giữa hiện tượng và vật tự nó.',
    quiz: [],
  },
];

const conceptsData = [
  {
    name: 'Chủ nghĩa duy tâm (Idealism)',
    description: 'Quan điểm siêu hình cho rằng thực tại hoàn toàn ở trong tâm trí, rằng mọi thứ tồn tại đều phụ thuộc vào tâm trí hoặc ý thức theo một cách nào đó.',
  },
  {
    name: 'Chủ nghĩa duy vật (Materialism)',
    description: 'Quan điểm cho rằng tất cả những gì tồn tại là vật chất hoặc năng lượng; rằng mọi thứ đều được cấu tạo từ vật chất và mọi hiện tượng (bao gồm cả ý thức) là kết quả của sự tương tác vật chất.',
  },
  {
    name: 'Chủ nghĩa hiện sinh (Existentialism)',
    description: 'Một triết lý nhấn mạnh đến tự do cá nhân, trách nhiệm và tính chủ quan. Những người theo chủ nghĩa hiện sinh tin rằng mỗi cá nhân hoàn toàn chịu trách nhiệm trong việc mang lại ý nghĩa cho cuộc sống và sống một cách đam mê và chân thành.',
  },
  {
    name: 'Chủ nghĩa duy lý (Rationalism)',
    description: 'Quan điểm nhận thức luận coi lý trí là nguồn gốc và thước đo chính của kiến thức. Những người theo chủ nghĩa duy lý tin rằng bản thân thực tại có một cấu trúc logic vốn có.',
  },
  {
    name: 'Chủ nghĩa kinh nghiệm (Empiricism)',
    description: 'Quan điểm nhận thức luận cho rằng kiến thức chỉ đến từ kinh nghiệm cảm tính. Nó nhấn mạnh vai trò của kinh nghiệm và bằng chứng, đặc biệt là nhận thức cảm tính, trong việc hình thành các ý tưởng.',
  },
];

const Header: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
  return (
    <header className="bg-dark text-white text-center p-3">
      <h1>Triết học 101</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Trang chủ</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#branches">Các nhánh</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#philosophers">Các triết gia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#concepts">Các khái niệm</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Liên hệ</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" onChange={(e) => onSearch(e.target.value)} />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Home: React.FC = () => {
  return (
    <section id="home" className="p-5">
      <div className="container">
        <h2>Chào mừng đến với Triết học 101</h2>
        <p>Trang web này dành riêng cho việc khám phá thế giới triết học hấp dẫn. Từ những người Hy Lạp cổ đại đến các nhà tư tưởng hiện đại, chúng ta sẽ đề cập đến những ý tưởng và nhân vật chính đã định hình sự hiểu biết của chúng ta về thế giới.</p>
        <p>Sử dụng trang web này để ôn tập các khái niệm chính, tìm hiểu về các nhà triết học có ảnh hưởng nhất và kiểm tra kiến thức của bạn với các câu đố tương tác của chúng tôi.</p>
      </div>
    </section>
  );
}

const Branches: React.FC = () => {
  return (
    <section id="branches" className="p-5 bg-light">
      <div className="container">
        <h2>Các nhánh của Triết học</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Siêu hình học (Metaphysics)
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Siêu hình học là nhánh triết học xem xét bản chất cơ bản của thực tại, bao gồm mối quan hệ giữa tâm và vật, giữa bản chất và thuộc tính, và giữa tiềm năng và hiện thực.</p>
                <strong>Khái niệm cốt lõi:</strong> Tồn tại, hữu thể, thực tại, bản chất, thời gian, không gian.<br />
                <strong>Câu hỏi chính:</strong> Thực tại là gì? Bản chất của sự tồn tại là gì? Mối quan hệ giữa tâm và thân là gì?<br />
                <strong>Các triết gia tiêu biểu:</strong> Parmenides, Plato, Aristotle, Descartes, Leibniz, Spinoza.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Nhận thức luận (Epistemology)
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Nhận thức luận là nhánh triết học liên quan đến lý thuyết về tri thức. Nó đặt câu hỏi tri thức là gì và làm thế nào để có được nó, và mức độ tri thức có thể có được về bất kỳ chủ đề hoặc thực thể nào.</p>
                <strong>Khái niệm cốt lõi:</strong> Tri thức, niềm tin, sự biện minh, chân lý, nhận thức, lý trí.<br />
                <strong>Câu hỏi chính:</strong> Tri thức là gì? Làm thế nào chúng ta có được tri thức? Sự khác biệt giữa niềm tin và tri thức là gì?<br />
                <strong>Các triết gia tiêu biểu:</strong> Plato, Aristotle, Descartes, Locke, Hume, Kant.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Đạo đức học (Ethics)
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Đạo đức học, hay triết học đạo đức, là một nhánh của triết học bao gồm việc hệ thống hóa, bảo vệ và đề xuất các khái niệm về hành vi đúng và sai. Nó thường được chia thành ba lĩnh vực chủ đề: siêu đạo đức học, đạo đức học chuẩn tắc và đạo đức học ứng dụng.</p>
                <strong>Khái niệm cốt lõi:</strong> Tốt, xấu, đúng, sai, đức hạnh, nghĩa vụ, hạnh phúc.<br />
                <strong>Câu hỏi chính:</strong> Cuộc sống tốt đẹp là gì? Điều đúng đắn cần làm là gì? Công lý là gì?<br />
                <strong>Các triết gia tiêu biểu:</strong> Socrates, Plato, Aristotle, Epicurus, Aquinas, Kant, Mill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Philosophers: React.FC<{ philosophers: typeof philosophersData }> = ({ philosophers }) => {
  return (
    <section id="philosophers" className="p-5">
      <div className="container">
        <h2>Các triết gia tiêu biểu</h2>
        <div className="row">
          {philosophers.map((philosopher, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={philosopher.imageUrl} className="card-img-top" alt={philosopher.name} style={{height: '300px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{philosopher.name}</h5>
                  <p className="card-text">{philosopher.bio}</p>
                  <ul className="list-group list-group-flush mt-auto">
                    <li className="list-group-item"><strong>Tác phẩm chính:</strong> <em>{philosopher.majorWorks}</em></li>
                    <li className="list-group-item"><strong>Ý tưởng cốt lõi:</strong> {philosopher.coreIdeas}</li>
                  </ul>
                  {philosopher.quiz.length > 0 && <Quiz questions={philosopher.quiz} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-5 bg-light">
      <div className="container">
        <h2>Liên hệ chúng tôi</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tên</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Địa chỉ email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Nội dung</label>
            <textarea className="form-control" id="message" rows={3}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Gửi</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhilosophers = philosophersData.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConcepts = conceptsData.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <main>
        <Home />
        <Branches />
        <Philosophers philosophers={filteredPhilosophers} />
        <Concepts concepts={filteredConcepts} />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Triết học 101</p>
      </footer>
    </div>
  );
}

export default App;