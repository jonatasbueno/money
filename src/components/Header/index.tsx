import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog"

import logoImage from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* asChild tranfere a responsibilidade de trigger para o elemento filho */}
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}