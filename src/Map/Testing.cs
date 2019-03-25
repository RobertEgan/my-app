
    public int RangeSumBST(TreeNode root, int L, int R) {
        int value = 0;

        if (root.Val == L && root.Val == R)
        {
            return root.Val;
        }

        if( root.Val > L && root.Val > R){
            return RangeSumBST( root.Left, L, R);
        }

        if( root.Val < L && root.Val < R){
            return RangeSumBST( root.Right, L, R);
        }

        value += root.Val;

        value += CalcLeftNodes(root.Left,L);

        value += CalcRightNodes(root.Right,R);

        return value;
    }

    public CalcLeftNodes(TreeNode node, int L){
        int value = 0;

        if(node == null){
            return value;
        }

        if(node.Val >= L){
            value += node.Val;
        }

        if(node.Val > L){
            value += CalcLeftNodes(node.Left, L);
        }

        value += CalcLeftNodes(node.Right, L);

        return value;
    }

    public CalcRightNodes(TreeNode rightNode, int R){
        int value = 0;

        if(node == null){
            return value;
        }

        if(node.Val >= R){
            value += node.Val;
        }

        if(node.Val < R){
            value += CalcRightNodes(node.Right, R);
        }

        value += CalcRightNodes(node.Left, R);

        return value;
    }
