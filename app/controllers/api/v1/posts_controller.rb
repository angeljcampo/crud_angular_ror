module Api
  module V1
    class PostsController < V1Controller

      before_action :set_post, only: [:show, :edit, :update, :destroy]

      def index
        @posts = Post.all
        render json: @posts.to_json(include: :author)
      end
      
      def create
        @post = Post.new(post_params)
        if @post.save
          render json: @post, status: 200
        else
          render json: @post.errors
        end
      end

      def show
        if @post
          render json: @post, status: 200
        end
      end

      def edit
      end

      def update
        if @post.update(post_params)
          render json: "El post fue correctamente actualizado", status: 200
        else
          render json: @post.errors
        end

      end

      def destroy
        if @post.destroy
          render json: "El post fue correctamente eliminado", status: 200
        else
          render json: @post.errors
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :description, :author_id)        
      end
    end
  end
end
