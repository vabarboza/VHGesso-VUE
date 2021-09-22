import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Empresa from "../views/Empresa.vue";
import ForroLiso from "../views/Produtos/ForroLiso.vue";
import Colunas from "../views/Produtos/Colunas.vue";
import Molduras from "../views/Produtos/Molduras.vue";
import GessoAcartonado from "../views/Produtos/GessoAcartonado.vue";
import Sancas from "../views/Produtos/Sancas.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/empresa",
    name: "Empresa",
    component: Empresa,
  },
  {
    path: "/produtos/forrosliso",
    name: "Forro Liso",
    component: ForroLiso,
  },
  {
    path: "/produtos/colunas",
    name: "Colunas",
    component: Colunas,
  },
  {
    path: "/produtos/molduras",
    name: "Molduras",
    component: Molduras,
  },
  {
    path: "/produtos/gesso-acartonado",
    name: "Gesso Acartonado",
    component: GessoAcartonado,
  },
  {
    path: "/produtos/sancas",
    name: "Sancas",
    component: Sancas,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
