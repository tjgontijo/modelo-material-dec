<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title class="text-center">
        <span style="font-size: calc(0.65em + .8vw); padding-right: 3vw">Modelo Quasar</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      behavior="mobile"
      >
      <q-list>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Página Inicial</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset/>
         <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="fas fa-chalkboard-teacher" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Apresentação da Disciplina</q-item-label>
            </q-item-section>
          </q-item>
        <q-expansion-item icon="fas fa-book" label="Unidade I" :header-inset-level="0.1" :content-inset-level="0.3">
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 01</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 02</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item icon="fas fa-book" label="Unidade II" :header-inset-level="0.1" :content-inset-level="0.3">
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 01</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 02</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item icon="fas fa-book" label="Unidade III" :header-inset-level="0.1" :content-inset-level="0.3">
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 01</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 02</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item icon="fas fa-book" label="Unidade IV" :header-inset-level="0.1" :content-inset-level="0.3">
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 01</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Aula 02</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item icon="fas fa-book" label="Modelos" :header-inset-level="0.1" :content-inset-level="0.3">
          <q-item clickable to="/modelos/destaque">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Destaque</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/modelos/imagem">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Imagem</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/modelos/navegacao">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Navegação</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/modelos/imagem">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Imagem</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/modelos/">
            <q-item-section avatar>
              <q-icon name="far fa-file-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Imagem</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-separator inset spaced/>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="fas fa-hashtag" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Referências</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="fas fa-book-reader" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dicas de Leitura</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="">
            <q-item-section avatar>
              <q-icon name="fas fa-users" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Elaboração</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="https://suporte.iscp.edu.br">
            <q-item-section avatar>
              <q-icon name="far fa-comment" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Suporte Técnico</q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
