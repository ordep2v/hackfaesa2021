import { CompaniesDoing } from "./components/CompaniesDoing";
import { MakeDiff } from "./components/MakeDiff";
import { StampProgress } from "./components/StampProgress";
import { TopButtons } from "./components/TopButtons";
import { SystemContainer } from "./styles";

const ContactUsFormDetails = [
  { content: "Nome" },
  { content: "Telefone" },
  { content: "Empresa" },
  { content: "Email" },
];

export const SystemModule = () => {
  return (
    <SystemContainer>
      <TopButtons/>
      <StampProgress/>
      <MakeDiff/>
      <CompaniesDoing/>
    </SystemContainer>
  );
};
