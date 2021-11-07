import { Stamp } from "../../../../../shared-components/UI/Stamp";
import { SeparatorTitle } from "../../../../../shared-components/UI/SeparatorTitle";

import { StampProgressContainer } from "./styles";

export const ObjectivesStampProgress = () => {
  return (
    <>
      <StampProgressContainer>
        <SeparatorTitle text="Sua lista de objetivos, vamos fazer o mundo melhor." />
        <div className="stamps">
          <Stamp
            isBadge
            badgeText="Completo"
            isBadgeColor="green"
            title="Objetivo"
            description="Reduzir gastos de energia em 25%"
          />
          <Stamp
            isBadge
            badgeText="Em progresso"
            isBadgeColor="yellow"
            title="Objetivo"
            description="Adotar cultura de distribuição de sementes orgânicas"
            share
            shareText="Tornar colaborativo"
          />
          <Stamp
            isBadge
            badgeText="Em progresso"
            isBadgeColor="yellow"
            title="Objetivo"
            description="Doação para instituições de plantio"
            share
            shareText="Tornar colaborativo"
          />
          <Stamp
            isBadge
            badgeText="Em progresso"
            isBadgeColor="yellow"
            title="Objetivo"
            description="Compartilhar cultura de reciclagem"
            share
            shareText="Tornar colaborativo"
          />
          <Stamp
            isBadge
            badgeText="Completo"
            isBadgeColor="green"
            title="Objetivo"
            description="Mobilizar funcionários a uma causa ecológica"
          />
        </div>
      </StampProgressContainer>
    </>
  );
};
