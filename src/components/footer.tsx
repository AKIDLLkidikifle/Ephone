import { Github} from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <a href='https://github.com/AKIDLLkidikifle/REACT_FLOW-ephone' target='_blank'><Github size={24}/></a>
      
    </footer>
  );
}


