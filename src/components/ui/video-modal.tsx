"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MessageCircle, Share2, Send, Loader2 } from "lucide-react"; // Updated Icons
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title?: string;
    category?: string;
}

// Mock Comments Data
const INITIAL_COMMENTS = [
    { user: "julia_mkt", text: "Que edição absurda! 🔥" },
    { user: "pedro.vfx", text: "O color grading ficou perfeito." },
    { user: "marcos_agencia", text: "Preciso de um desse pra minha marca." },
];

export function VideoModal({ isOpen, onClose, videoUrl, title, category }: VideoModalProps) {
    const [mounted, setMounted] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(1240);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState(INITIAL_COMMENTS);
    const [newComment, setNewComment] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
            setIsLoading(true); // Reset loading state when opening
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
            // Reset states on close
            setLiked(false);
            setLikesCount(1240);
            setShowComments(false);
            setIsLoading(true);
        };
    }, [isOpen, onClose]);

    const handleLike = () => {
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Rarity Videos - ' + title,
                    text: 'Dá uma olhada nessa produção incrível da Rarity Videos!',
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copiado para a área de transferência!");
            }
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setComments([...comments, { user: "voce", text: newComment }]);
        setNewComment("");
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 md:p-4">
                    {/* Backdrop Layer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal Content - Reels Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        className="relative z-10 w-full md:max-w-[400px] h-full md:h-[85vh] bg-neutral-900 md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors text-white/80 hover:text-white backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>

                        {/* Video Player */}
                        <div className="flex-1 w-full h-full relative bg-black flex items-center justify-center">

                            {/* Loading Spinner */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                    <Loader2 className="w-10 h-10 text-rarity-lavender animate-spin" />
                                </div>
                            )}

                            <video
                                src={videoUrl}
                                controls={false}
                                autoPlay
                                loop
                                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                playsInline
                                onWaiting={() => setIsLoading(true)}
                                onCanPlay={() => setIsLoading(false)}
                                onLoadedData={() => setIsLoading(false)}
                                onClick={(e) => {
                                    const video = e.currentTarget;
                                    video.paused ? video.play() : video.pause();
                                }}
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                            {/* Social Icons Sidebar */}
                            <div className="absolute bottom-24 right-4 flex flex-col items-center gap-6 z-40">
                                {/* Like Button */}
                                <div className="flex flex-col items-center gap-1 group cursor-pointer" onClick={handleLike}>
                                    <div className="p-3 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-full transition-all active:scale-90">
                                        <Heart
                                            size={24}
                                            className={`transition-colors duration-300 ${liked ? "fill-red-500 text-red-500" : "text-white"}`}
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-white/90 drop-shadow-md">{likesCount}</span>
                                </div>

                                {/* Comment Button */}
                                <div className="flex flex-col items-center gap-1 group cursor-pointer" onClick={() => setShowComments(true)}>
                                    <div className="p-3 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-full transition-colors">
                                        <MessageCircle size={24} className="text-white" />
                                    </div>
                                    <span className="text-xs font-medium text-white/90 drop-shadow-md">{comments.length}</span>
                                </div>

                                {/* Share Button */}
                                <div className="flex flex-col items-center gap-1 group cursor-pointer" onClick={handleShare}>
                                    <div className="p-3 bg-white/10 group-hover:bg-white/20 backdrop-blur-md rounded-full transition-colors">
                                        <Share2 size={24} className="text-white" />
                                    </div>
                                    <span className="text-xs font-medium text-white/90 drop-shadow-md">Share</span>
                                </div>
                            </div>

                            {/* Info Overlay */}
                            <div className="absolute bottom-6 left-6 right-20 z-40 text-left pointer-events-none">
                                {category && (
                                    <div className="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                                        {category}
                                    </div>
                                )}
                                {title && (
                                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md leading-tight mb-2">
                                        {title}
                                    </h3>
                                )}
                                <p className="text-sm text-white/80 line-clamp-2 drop-shadow-md font-light">
                                    Produção exclusiva Rarity Videos.
                                </p>
                            </div>

                            {/* Comments Drawer (Mock) */}
                            <AnimatePresence>
                                {showComments && (
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                        className="absolute inset-x-0 bottom-0 h-[60%] bg-neutral-900 rounded-t-3xl z-50 flex flex-col shadow-2xl border-t border-white/10"
                                    >
                                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                                            <span className="text-sm font-bold text-white">Comentários ({comments.length})</span>
                                            <button onClick={() => setShowComments(false)} className="p-1 hover:bg-white/10 rounded-full">
                                                <X size={18} className="text-white/70" />
                                            </button>
                                        </div>

                                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                            {comments.map((comment, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-xs font-bold text-white/90">{comment.user}</p>
                                                        <p className="text-sm text-white/70">{comment.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <form onSubmit={handleCommentSubmit} className="p-3 border-t border-white/10 bg-neutral-900 flex gap-2">
                                            <input
                                                type="text"
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                placeholder="Adicione um comentário..."
                                                className="flex-1 bg-neutral-800 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                                            />
                                            <button type="submit" className="p-2 bg-rarity-lavender rounded-full text-black font-bold">
                                                <Send size={16} />
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
