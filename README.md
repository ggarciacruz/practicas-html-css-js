


# Con este codigo en linux (ubuntu) se puede hacer que sea vean en nombre de la rama de los repositorios
# Función para obtener el nombre de la rama actual en un repositorio Git
function get_git_branch() {
    local git_dir="$(git rev-parse --git-dir 2>/dev/null)"
    if [ -n "$git_dir" ]; then
        local branch=$(git symbolic-ref --short HEAD 2>/dev/null)
        if [ -n "$branch" ]; then
            echo " ($branch)"
        fi
    fi
}

# Definir el prompt personalizado con el nombre de usuario, host y directorio actual
export PS1="\u@\h:\w\$(get_git_branch) \$ "
# Con este codigo en linux (ubuntu) se puede hacer que sea vean en nombre de la rama de los repositorios