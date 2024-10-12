import { toast } from 'sonner';

const useCopy = () => {

  const copyToClipboard = async (text) => {
    if (!navigator?.clipboard) {
      toast.error('当前浏览器版本不支持复制 API！');
    }

    try {
      await navigator.clipboard.writeText(text);
      toast.success('复制成功！')
    } catch (error) {
      toast.error('复制失败！')
    }
  };

  return { copyToClipboard };
};

export default useCopy;