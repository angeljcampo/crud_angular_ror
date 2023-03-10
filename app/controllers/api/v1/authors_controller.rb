module Api
  module V1
    class AuthorsController < V1Controller
      before_action :set_author, only: [:show, :update, :destroy]

      def index
        @authors = Author.all
        render json: @authors
      end

      def create
        @author = Author.new(author_params)
        if @author.save
          render json: @author
        else
          render json: @author.errors
        end
      end

      def show
        if @author
          render json: @author
        end
      end

      def update
        if @author.update(author_params)
          render json: "El autor fue correctamente actualizado"
        else
          render json: @author.errors
        end

      end

      def destroy
        if @author.destroy
          render json: "El autor fue correctamente eliminado"
        else
          render json: @author.errors
        end
      end

      private

      def set_author
        @author = Author.find(params[:id])
      end

      def author_params
        params.require(:author).permit(:name , :lastname, :age)        
      end
    end
  end
end