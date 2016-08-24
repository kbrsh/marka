git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "bruhr" ];
        then
                GIT_COMMITTER_NAME="KingPixil";
                GIT_AUTHOR_NAME="Kabir Shah";
                GIT_COMMITTER_EMAIL="simplecooldude1@gmail.com";
                GIT_AUTHOR_EMAIL="simplecooldude1@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
