import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import logoImg from "../../public/logoPlanetaPizza.svg";
import {Input} from "../components/ui/Input"

export default function Home() {
  return (
    <>
    <Head>
      <title>PlanetaPizza - Faça seu login</title>
    </Head>

    <div className={styles.containerCenter} >
      <Image src={logoImg} alt="Logo Planeta Pizza" />
    </div>

    <div className={styles.login} >
      <form>
        <Input 
          placeholder="Digite seu email"
          type="text"
        />
        <Input 
          placeholder="Sua senha"
          type="password"
        />
      </form>
    </div>
    </>
  );
}
