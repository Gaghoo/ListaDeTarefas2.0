<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6" sm="6" class="my-1">
                <AddTodo/>
            </v-col>
        </v-row>
        <v-row>
            <TodoList v-for="t in tarefas" :key="t.id" :tarefa="t"/>
        </v-row>
    </v-container>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'

export default {
    components:{
        AddTodo,
        TodoList
    },
    data:()=>({
        
    }),
    computed:{
        tarefas(){
            return this.$store.state.tarefas
        }
    }
}
</script>
