import { create } from "zustand"
import { v4 as uuid } from "uuid"
import { persist } from "zustand/middleware"
export const useTaskStore = create()(
    persist(
        set => ({
            tasks: [],
            draggedTask: null,
            addTask: (title, description) =>
                set(state => ({
                    tasks: [
                        ...state.tasks,
                        { id: uuid(), title, description, status: "TODO" }
                    ]
                })),
            dragTask: id => set({ draggedTask: id }),
            removeTask: id =>
                set(state => ({
                    tasks: state.tasks.filter(task => task.id !== id)
                })),
            updateTask: (id, status) =>
                set(state => ({
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, status } : task
                    )
                }))
        }),
        { name: "task-store", skipHydration: true }
    )
)