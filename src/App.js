import './App.css';
import NavBar from "./Navigation/NavBar";
import yes from "./Resources/sound/yes_male.mp3";
import no from "./Resources/sound/no_male.mp3";
import { Howl, Howler } from 'howler';

const playSound = (clip) => {
  const sound = new Howl({
    src: [clip]
  });

  sound.play();
  Howler.volume(1.0);
}

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <div className='navBar'>
          <NavBar />
        </div>
        <div className='content-container'>
          <div className='yesNo'>
            <table className='yesNo-table'>
              <thead>
                <tr>
                  <td>
                    <button onClick={() => { playSound(yes) }}>Yes / 是</button>
                  </td>
                  <td>
                    <button onClick={() => { playSound(no) }}>No / 不是</button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className='directionals'>
            <table className='directionals-table'>
              <tr>
                <td></td>
                <td>
                  <button>Up / 上</button>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <button>Left / 左</button>
                </td>
                <td></td>
                <td>
                  <button>Right / 右</button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Down / 下</button>
                </td>
                <td></td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
