// Copyright (c) 2025 hotflow2024
// Licensed under AGPL-3.0-or-later. See LICENSE for details.
// Commercial licensing available. See COMMERCIAL_LICENSE.md.
/**
 * Cinematography Profile Presets — Bộ cài đặt phong cách quay phim
 *
 * Giữa「lựa chọn phong cách」và「trường điều khiển quay từng cảnh」, cung cấp tiêu chuẩn ngôn ngữ quay phim cấp dự án.
 * Khi AI hiệu chỉnh sẽ sử dụng đây làm xu hướng mặc định, prompt builder sẽ quay về đây khi trường từng cảnh trống.
 */

import type {
  LightingStyle,
  LightingDirection,
  ColorTemperature,
  DepthOfField,
  FocusTransition,
  CameraRig,
  MovementSpeed,
  AtmosphericEffect,
  EffectIntensity,
  PlaybackSpeed,
  CameraAngle,
  FocalLength,
  PhotographyTechnique,
} from '@/types/script';

// ==================== Định nghĩa kiểu ====================

export type CinematographyCategory =
  | 'cinematic'     // Phim điện ảnh
  | 'documentary'   // Phim tài liệu
  | 'stylized'      // Phong cách hóa
  | 'genre'         // Phim thể loại
  | 'era';          // Phong cách thời đại

export interface CinematographyProfile {
  id: string;
  name: string;          // Tên tiếng Việt
  nameEn: string;        // Tên tiếng Anh
  category: CinematographyCategory;
  description: string;   // Mô tả (1-2 câu)
  emoji: string;         // Emoji nhận diện

  // ---- Ánh sáng mặc định (Gaffer) ----
  defaultLighting: {
    style: LightingStyle;
    direction: LightingDirection;
    colorTemperature: ColorTemperature;
  };

  // ---- Tiêu điểm mặc định (Focus Puller) ----
  defaultFocus: {
    depthOfField: DepthOfField;
    focusTransition: FocusTransition;
  };

  // ---- Thiết bị mặc định (Camera Rig) ----
  defaultRig: {
    cameraRig: CameraRig;
    movementSpeed: MovementSpeed;
  };

  // ---- Bầu không khí mặc định (On-set SFX) ----
  defaultAtmosphere: {
    effects: AtmosphericEffect[];
    intensity: EffectIntensity;
  };

  // ---- Tốc độ mặc định (Speed Ramping) ----
  defaultSpeed: {
    playbackSpeed: PlaybackSpeed;
  };

  // ---- Góc quay / Tiêu cự / Kỹ thuật mặc định (tùy chọn) ----
  defaultAngle?: CameraAngle;
  defaultFocalLength?: FocalLength;
  defaultTechnique?: PhotographyTechnique;

  // ---- Hướng dẫn AI ----
  /** Hướng dẫn quay phim cho AI (2-3 câu, đưa vào system prompt) */
  promptGuidance: string;
  /** Danh sách phim tham khảo (giúp AI hiểu phong cách mục tiêu) */
  referenceFilms: string[];
}

// ==================== Thông tin phân loại ====================

export const CINEMATOGRAPHY_CATEGORIES: { id: CinematographyCategory; name: string; emoji: string }[] = [
  { id: 'cinematic', name: 'Phim điện ảnh', emoji: '🎬' },
  { id: 'documentary', name: 'Phim tài liệu', emoji: '📹' },
  { id: 'stylized', name: 'Phong cách hóa', emoji: '🎨' },
  { id: 'genre', name: 'Phim thể loại', emoji: '🎭' },
  { id: 'era', name: 'Phong cách thời đại', emoji: '📅' },
];

// ==================== Danh sách cài đặt sẵn ====================

// ---------- Phim điện ảnh (cinematic) ----------

const CINEMATIC_PROFILES: CinematographyProfile[] = [
  {
    id: 'classic-cinematic',
    name: 'Điện ảnh kinh điển',
    nameEn: 'Classic Cinematic',
    category: 'cinematic',
    description: 'Chất lượng phim chiếu rạp chuẩn, ánh sáng ba điểm, nhiệt độ màu tự nhiên, di chuyển đường ray đều, hình ảnh trang trọng và hoành tráng',
    emoji: '🎞️',
    defaultLighting: { style: 'natural', direction: 'three-point', colorTemperature: 'warm' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'rack-between' },
    defaultRig: { cameraRig: 'dolly', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: [], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '50mm',
    promptGuidance: 'Tuân theo ngữ pháp điện ảnh kinh điển, ánh sáng ba điểm làm nền tảng, tông màu ấm tạo chất cảm ấm áp. Đường ray đẩy kéo giữ hình ảnh ổn định mượt mà, độ sâu trường ảnh điều chỉnh theo chức năng tự sự — đối thoại dùng độ sâu nông tập trung cảm xúc, toàn cảnh dùng độ sâu sâu giới thiệu bối cảnh.',
    referenceFilms: ['The Shawshank Redemption', 'Forrest Gump', 'The Godfather'],
  },
  {
    id: 'film-noir',
    name: 'Phim đen',
    nameEn: 'Film Noir',
    category: 'cinematic',
    description: 'Ánh sáng low-key, tương phản sáng tối mạnh, chủ yếu ánh sáng bên, tông lạnh, sương mù lan tỏa, cảm giác thở cầm tay',
    emoji: '🖤',
    defaultLighting: { style: 'low-key', direction: 'side', colorTemperature: 'cool' },
    defaultFocus: { depthOfField: 'shallow', focusTransition: 'rack-to-fg' },
    defaultRig: { cameraRig: 'handheld', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: ['fog', 'smoke'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'low-angle',
    defaultFocalLength: '35mm',
    promptGuidance: 'Linh hồn của phim đen là ánh sáng và bóng tối — trong vùng bóng tối lớn chỉ để lại một tia sáng bên chiếu sáng nhân vật. Tông lạnh kết hợp sương mù tạo cảm giác bất an, cầm tay rung nhẹ tăng sự căng thẳng chân thực. Cố gắng để nửa mặt nhân vật trong bóng tối, ám chỉ tính hai mặt của nhân vật.',
    referenceFilms: ['Blade Runner', 'Chinatown', 'The Third Man', 'Sin City'],
  },
  {
    id: 'epic-blockbuster',
    name: 'Phim sử thi',
    nameEn: 'Epic Blockbuster',
    category: 'cinematic',
    description: 'High-key sáng, ánh sáng chính diện, độ sâu trường ảnh sâu, cần cẩu di chuyển lớn, lóe ống kính, cảm giác hoành tráng',
    emoji: '⚔️',
    defaultLighting: { style: 'high-key', direction: 'front', colorTemperature: 'neutral' },
    defaultFocus: { depthOfField: 'deep', focusTransition: 'none' },
    defaultRig: { cameraRig: 'crane', movementSpeed: 'normal' },
    defaultAtmosphere: { effects: ['lens-flare', 'dust'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '24mm',
    promptGuidance: 'Cảm giác sử thi đến từ chiều sâu không gian — dùng độ sâu trường ảnh sâu và cần cẩu nâng hạ lớn để thể hiện cảnh hoành tráng. Ánh sáng high-key chính diện làm hình ảnh sáng và hùng vĩ, thêm lóe ống kính và hạt bụi tăng cảm giác điện ảnh. Cảnh chiến đấu có thể chuyển sang vác vai cầm tay tăng sức tác động.',
    referenceFilms: ['The Lord of the Rings', 'Gladiator', 'Braveheart', 'Kingdom of Heaven'],
  },
  {
    id: 'intimate-drama',
    name: 'Kịch tính thân mật',
    nameEn: 'Intimate Drama',
    category: 'cinematic',
    description: 'Ánh sáng bên tự nhiên, nhiệt độ màu ấm, độ sâu nông, chân máy tĩnh, yên tĩnh nội tâm, tập trung cảm xúc nhân vật',
    emoji: '🫂',
    defaultLighting: { style: 'natural', direction: 'side', colorTemperature: 'warm' },
    defaultFocus: { depthOfField: 'shallow', focusTransition: 'rack-between' },
    defaultRig: { cameraRig: 'tripod', movementSpeed: 'very-slow' },
    defaultAtmosphere: { effects: [], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '85mm',
    promptGuidance: 'Kịch tính thân mật dùng ống kính tĩnh và độ sâu nông kéo khán giả vào thế giới nội tâm nhân vật. Ánh sáng bên tự nhiên tạo tầng lớp sáng tối trên gương mặt, nhiệt độ màu ấm truyền tải cảm xúc. Máy quay gần như không di chuyển, để biểu cảm vi tế của diễn viên trở thành toàn bộ tiêu điểm.',
    referenceFilms: ['Manchester by the Sea', 'Marriage Story', 'In the Mood for Love'],
  },
  {
    id: 'romantic-film',
    name: 'Phim tình cảm lãng mạn',
    nameEn: 'Romantic Film',
    category: 'cinematic',
    description: 'Ngược sáng giờ vàng, độ sâu cực nông, Steadicam theo dõi mượt mà, hiệu ứng tia sáng Tyndall, mộng mơ và nhẹ nhàng',
    emoji: '💕',
    defaultLighting: { style: 'natural', direction: 'back', colorTemperature: 'golden-hour' },
    defaultFocus: { depthOfField: 'ultra-shallow', focusTransition: 'pull-focus' },
    defaultRig: { cameraRig: 'steadicam', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: ['light-rays', 'cherry-blossom'], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '85mm',
    defaultTechnique: 'bokeh',
    promptGuidance: 'Cốt lõi của cảm giác lãng mạn là ngược sáng — ngược sáng tông ấm giờ vàng làm viền nhân vật phát sáng. Độ sâu cực nông xóa mờ thế giới thành đốm sáng, Steadicam nhẹ nhàng theo nhân vật, như đang bước đi trong giấc mơ. Cánh hoa rơi hay tia sáng thỉnh thoảng thêm chất thơ cho hình ảnh.',
    referenceFilms: ['The Notebook', 'La La Land', 'Pride and Prejudice', 'Love Letter'],
  },
];

// ---------- Phim tài liệu (documentary) ----------

const DOCUMENTARY_PROFILES: CinematographyProfile[] = [
  {
    id: 'documentary-raw',
    name: 'Tài liệu cầm tay',
    nameEn: 'Raw Documentary',
    category: 'documentary',
    description: 'Cảm giác thở cầm tay, ánh sáng tự nhiên, độ sâu trung bình, ánh sáng chính diện, không chỉnh sửa, chân thực thô ráp',
    emoji: '📹',
    defaultLighting: { style: 'natural', direction: 'front', colorTemperature: 'neutral' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'pull-focus' },
    defaultRig: { cameraRig: 'handheld', movementSpeed: 'normal' },
    defaultAtmosphere: { effects: [], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '35mm',
    promptGuidance: 'Phong cách tài liệu theo đuổi「cảm giác hiện diện」— rung nhẹ của quay cầm tay khiến khán giả cảm thấy như đang ở đó. Sử dụng hoàn toàn ánh sáng tự nhiên, không chỉnh sửa nhân tạo. Lấy nét theo chuyển động nhân vật, cho phép lệch nét thỉnh thoảng, sự không hoàn hảo này ngược lại tăng thêm cảm giác chân thực.',
    referenceFilms: ['Life is Fruity', 'The Cove', 'Free Solo'],
  },
  {
    id: 'news-report',
    name: 'Tin tức thời sự',
    nameEn: 'News Report',
    category: 'documentary',
    description: 'Vác vai, ánh sáng high-key, độ sâu sâu, nhiệt độ màu trung tính, ưu tiên thông tin, hình ảnh sắc nét',
    emoji: '📡',
    defaultLighting: { style: 'high-key', direction: 'front', colorTemperature: 'neutral' },
    defaultFocus: { depthOfField: 'deep', focusTransition: 'none' },
    defaultRig: { cameraRig: 'shoulder', movementSpeed: 'normal' },
    defaultAtmosphere: { effects: [], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '24mm',
    promptGuidance: 'Tin tức thời sự lấy truyền tải thông tin làm ưu tiên hàng đầu — độ sâu sâu đảm bảo mọi yếu tố trong hình ảnh đều rõ ràng, ánh sáng high-key loại bỏ bóng để chi tiết hiện rõ đầy đủ. Quay vác vai giữ theo dõi linh hoạt nhưng ổn định hơn cầm tay. Bố cục hình ảnh chú trọng tầng lớp thông tin, nhân vật hoặc sự kiện quan trọng luôn ở tiêu điểm thị giác.',
    referenceFilms: ['Spotlight', 'All the President\'s Men', 'The Post'],
  },
];

// ---------- Phong cách hóa (stylized) ----------

const STYLIZED_PROFILES: CinematographyProfile[] = [
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk',
    nameEn: 'Cyberpunk Neon',
    category: 'stylized',
    description: 'Ánh sáng neon, ánh sáng viền, nhiệt độ màu hỗn hợp, độ sâu nông, ổn định trượt, sương mù lan tỏa',
    emoji: '🌃',
    defaultLighting: { style: 'neon', direction: 'rim', colorTemperature: 'mixed' },
    defaultFocus: { depthOfField: 'shallow', focusTransition: 'rack-to-bg' },
    defaultRig: { cameraRig: 'steadicam', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: ['haze', 'lens-flare'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'low-angle',
    defaultFocalLength: '35mm',
    defaultTechnique: 'reflection',
    promptGuidance: 'Ngôn ngữ thị giác của Cyberpunk là「xung đột lạnh ấm」— neon tím đỏ và xanh băng cùng khung hình, ánh sáng viền tách nhân vật khỏi nền tối. Độ sâu nông biến neon thành đốm sáng ảo giác, sương mù thêm cảm giác khối cho ánh sáng. Ống kính trượt chậm qua đường phố đêm mưa, tạo cảm giác xa cách của đô thị tương lai.',
    referenceFilms: ['Blade Runner 2049', 'Ghost in the Shell', 'The Matrix', 'TRON: Legacy'],
  },
  {
    id: 'wuxia-classic',
    name: 'Võ hiệp cổ điển',
    nameEn: 'Classic Wuxia',
    category: 'stylized',
    description: 'Ánh sáng bên tự nhiên, nhiệt độ màu ấm, độ sâu trung bình, cần cẩu nâng hạ, sương mờ phiêu diêu, cổ phong thanh tao',
    emoji: '🗡️',
    defaultLighting: { style: 'natural', direction: 'side', colorTemperature: 'warm' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'rack-between' },
    defaultRig: { cameraRig: 'crane', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: ['mist', 'falling-leaves'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '50mm',
    promptGuidance: 'Võ hiệp cổ điển theo đuổi「ý cảnh」— sương mù trên núi và lá rơi tạo cảm giác bao la của giang hồ. Cần cẩu từ trên cao từ từ hạ xuống nhân vật, như góc nhìn bao quát thiên hạ. Ánh sáng bên tự nhiên mô phỏng ánh sáng lốm đốm xuyên rừng tre, nhiệt độ màu ấm hòa hợp với tranh thủy mặc. Cảnh chiến đấu có thể thêm chuyển động chậm, thể hiện vẻ đẹp của võ thuật.',
    referenceFilms: ['Crouching Tiger, Hidden Dragon', 'Hero', 'The Assassin', 'The Grandmaster'],
  },
  {
    id: 'horror-thriller',
    name: 'Kinh dị rùng rợn',
    nameEn: 'Horror Thriller',
    category: 'stylized',
    description: 'Ánh sáng low-key, ánh sáng từ dưới gây bất an, tông lạnh, độ sâu nông, cầm tay run rẩy, sương mù dày che khuất',
    emoji: '👻',
    defaultLighting: { style: 'low-key', direction: 'bottom', colorTemperature: 'cool' },
    defaultFocus: { depthOfField: 'shallow', focusTransition: 'rack-to-bg' },
    defaultRig: { cameraRig: 'handheld', movementSpeed: 'very-slow' },
    defaultAtmosphere: { effects: ['fog', 'haze'], intensity: 'heavy' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'low-angle',
    defaultFocalLength: '24mm',
    promptGuidance: 'Nguyên tắc quay phim kinh dị là「ẩn giấu đáng sợ hơn phơi bày」— độ sâu nông làm hậu cảnh mờ thành mối đe dọa vô hình, sương mù dày che khuất tầm nhìn tạo bất an. Ánh sáng từ dưới tạo bóng bất thường trên gương mặt, cầm tay di chuyển cực chậm tạo cảm giác rình rập. Khoảnh khắc then chốt đột ngột quay nhanh, phá vỡ nhịp chậm trước đó.',
    referenceFilms: ['The Shining', 'Hereditary', 'The Conjuring', 'Ringu'],
  },
  {
    id: 'music-video',
    name: 'Phong cách MV',
    nameEn: 'Music Video',
    category: 'stylized',
    description: 'Neon ngược sáng, nhiệt độ màu hỗn hợp, độ sâu cực nông, Steadicam xoay vòng, hạt sáng bay, tác động thị giác mạnh',
    emoji: '🎵',
    defaultLighting: { style: 'neon', direction: 'back', colorTemperature: 'mixed' },
    defaultFocus: { depthOfField: 'ultra-shallow', focusTransition: 'pull-focus' },
    defaultRig: { cameraRig: 'steadicam', movementSpeed: 'fast' },
    defaultAtmosphere: { effects: ['particles', 'lens-flare'], intensity: 'heavy' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'low-angle',
    defaultFocalLength: '35mm',
    defaultTechnique: 'bokeh',
    promptGuidance: 'MV theo đuổi tác động thị giác cực đại — mỗi khung hình phải như poster. Độ sâu cực nông xóa mờ mọi thứ thành đốm sáng đa sắc, neon ngược sáng vẽ viền nhân vật. Steadicam nhanh quay vòng, kết hợp thay đổi tốc độ thường xuyên (chậm và nhanh xen kẽ). Sử dụng nhiều hạt sáng và lóe ống kính tăng cảm giác mộng mơ.',
    referenceFilms: ['Đoạn MV trong La La Land', 'Beyoncé - Lemonade', 'The Weeknd - Blinding Lights'],
  },
];

// ---------- Phim thể loại (genre) ----------

const GENRE_PROFILES: CinematographyProfile[] = [
  {
    id: 'family-warmth',
    name: 'Gia đình ấm áp',
    nameEn: 'Family Warmth',
    category: 'genre',
    description: 'Ánh sáng chính diện tự nhiên, nhiệt độ màu ấm 3200K, độ sâu trung bình, chân máy ổn định, ấm áp như nắng rọi vào phòng khách',
    emoji: '🏠',
    defaultLighting: { style: 'natural', direction: 'front', colorTemperature: 'warm' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'rack-between' },
    defaultRig: { cameraRig: 'tripod', movementSpeed: 'very-slow' },
    defaultAtmosphere: { effects: ['light-rays'], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '50mm',
    promptGuidance: 'Quay phim gia đình phải như một người quan sát yên lặng — chân máy ổn định không can thiệp, ánh sáng ấm như nắng chiều rọi qua cửa sổ. Độ sâu trung bình để các thành viên gia đình đều rõ trong hình, truyền tải cảm giác「đoàn tụ」. Thỉnh thoảng tia sáng Tyndall từ cửa sổ chiếu vào, thêm chút thơ mộng cho cảnh gia đình bình thường.',
    referenceFilms: ['Shoplifters', 'Still Walking', 'Reply 1988', 'All Is Well'],
  },
  {
    id: 'action-intense',
    name: 'Hành động mãnh liệt',
    nameEn: 'Intense Action',
    category: 'genre',
    description: 'Ánh sáng bên high-key, nhiệt độ màu trung tính, độ sâu trung bình, vác vai bám theo nhanh, bụi bay mù mịt',
    emoji: '💥',
    defaultLighting: { style: 'high-key', direction: 'side', colorTemperature: 'neutral' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'pull-focus' },
    defaultRig: { cameraRig: 'shoulder', movementSpeed: 'fast' },
    defaultAtmosphere: { effects: ['dust', 'sparks'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '24mm',
    defaultTechnique: 'high-speed',
    promptGuidance: 'Quay phim hành động theo đuổi「truyền tải động năng」— vác vai bám theo nhanh để khán giả cảm nhận sức tác động, ánh sáng bên làm nổi bật cơ bắp và đường nét chuyển động. Độ sâu trung bình đảm bảo chủ thể rõ nhưng hậu cảnh xóa mờ vừa phải. Khoảnh khắc hành động then chốt (ra đòn, nổ) có thể dùng chậm 0.5x nhấn mạnh sức mạnh, sau đó trở lại tốc độ bình thường ngay. Bụi và tia lửa tăng cảm giác va chạm vật lý chân thực.',
    referenceFilms: ['Mad Max: Fury Road', 'The Bourne Identity', 'The Raid', 'Mission: Impossible'],
  },
  {
    id: 'suspense-mystery',
    name: 'Hồi hộp trinh thám',
    nameEn: 'Suspense Mystery',
    category: 'genre',
    description: 'Ánh sáng bên low-key, tông lạnh, độ sâu nông, đường ray đẩy chậm, sương mù bao phủ, ẩn giấu và hé lộ',
    emoji: '🔍',
    defaultLighting: { style: 'low-key', direction: 'side', colorTemperature: 'cool' },
    defaultFocus: { depthOfField: 'shallow', focusTransition: 'rack-to-fg' },
    defaultRig: { cameraRig: 'dolly', movementSpeed: 'very-slow' },
    defaultAtmosphere: { effects: ['mist'], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '50mm',
    promptGuidance: 'Cốt lõi quay phim hồi hộp là「kiểm soát việc hé lộ thông tin」— độ sâu nông có chọn lọc chỉ cho khán giả thấy những gì đạo diễn muốn. Đường ray tiến cực chậm tạo cảm giác áp bức, ánh sáng bên low-key khiến hình ảnh luôn có một nửa ẩn trong bóng tối. Chuyển nét là thủ pháp tự sự quan trọng, từ manh mối tiền cảnh chuyển nét sang nghi phạm hậu cảnh, hoặc ngược lại. Sương mù thêm cảm giác mờ ảo, ám chỉ sự bất định của sự thật.',
    referenceFilms: ['Gone Girl', 'Se7en', 'Memories of Murder', '12 Angry Men'],
  },
];

// ---------- Phong cách thời đại (era) ----------

const ERA_PROFILES: CinematographyProfile[] = [
  {
    id: 'hk-retro-90s',
    name: 'Phim Hong Kong 90s',
    nameEn: '90s Hong Kong',
    category: 'era',
    description: 'Neon ánh sáng bên, nhiệt độ màu hỗn hợp, độ sâu trung bình, cầm tay lắc, sương mù lan tỏa, u sầu kiểu Vương Gia Vệ',
    emoji: '🌙',
    defaultLighting: { style: 'neon', direction: 'side', colorTemperature: 'mixed' },
    defaultFocus: { depthOfField: 'medium', focusTransition: 'rack-between' },
    defaultRig: { cameraRig: 'handheld', movementSpeed: 'normal' },
    defaultAtmosphere: { effects: ['haze', 'smoke'], intensity: 'moderate' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '35mm',
    promptGuidance: 'DNA quay phim của phim Hong Kong 90s là「neon đô thị + cầm tay lang thang」— neon nhiệt độ màu hỗn hợp nhuộm đường phố thành giấc mơ đan xen đỏ xanh. Quay cầm tay luồn lách trong đám đông, thỉnh thoảng dùng rút khung hình tạo hiệu ứng bóng mờ kiểu Vương Gia Vệ. Đường phố phủ sương mù, mỗi người qua đường đều như có câu chuyện. Ánh sáng bên vẽ nét viền u sầu của nhân vật.',
    referenceFilms: ['Chungking Express', 'Fallen Angels', 'Infernal Affairs', 'A Better Tomorrow'],
  },
  {
    id: 'golden-age-hollywood',
    name: 'Thời hoàng kim Hollywood',
    nameEn: 'Golden Age Hollywood',
    category: 'era',
    description: 'Ánh sáng ba điểm high-key, nhiệt độ màu ấm, độ sâu sâu, đường ray di chuyển thanh lịch, tỏa sáng rực rỡ, trang trọng lộng lẫy',
    emoji: '⭐',
    defaultLighting: { style: 'high-key', direction: 'three-point', colorTemperature: 'warm' },
    defaultFocus: { depthOfField: 'deep', focusTransition: 'none' },
    defaultRig: { cameraRig: 'dolly', movementSpeed: 'slow' },
    defaultAtmosphere: { effects: ['light-rays'], intensity: 'subtle' },
    defaultSpeed: { playbackSpeed: 'normal' },
    defaultAngle: 'eye-level',
    defaultFocalLength: '50mm',
    promptGuidance: 'Quay phim thời hoàng kim Hollywood theo đuổi「sự hoàn hảo」— ánh sáng ba điểm loại bỏ mọi bóng tối không đẹp, để ngôi sao tỏa sáng rạng ngời. Độ sâu sâu và bố cục tinh tế khiến mỗi khung hình như bức tranh sơn dầu, đường ray di chuyển chậm thanh lịch như điệu waltz. Nhiệt độ màu ấm mang đến ánh sáng vàng hoài cổ. Tất cả phải trang trọng, lộng lẫy, hoàn hảo không tỳ vết.',
    referenceFilms: ['Casablanca', 'Citizen Kane', 'Sunset Boulevard', 'Gone with the Wind'],
  },
];

// ==================== Xuất ====================

/** Tất cả cài đặt sẵn phong cách quay phim */
export const CINEMATOGRAPHY_PROFILES: readonly CinematographyProfile[] = [
  ...CINEMATIC_PROFILES,
  ...DOCUMENTARY_PROFILES,
  ...STYLIZED_PROFILES,
  ...GENRE_PROFILES,
  ...ERA_PROFILES,
] as const;

/** Tổ chức theo phân loại */
export const CINEMATOGRAPHY_PROFILE_CATEGORIES: {
  id: CinematographyCategory;
  name: string;
  emoji: string;
  profiles: readonly CinematographyProfile[];
}[] = [
  { id: 'cinematic', name: 'Phim điện ảnh', emoji: '🎬', profiles: CINEMATIC_PROFILES },
  { id: 'documentary', name: 'Phim tài liệu', emoji: '📹', profiles: DOCUMENTARY_PROFILES },
  { id: 'stylized', name: 'Phong cách hóa', emoji: '🎨', profiles: STYLIZED_PROFILES },
  { id: 'genre', name: 'Phim thể loại', emoji: '🎭', profiles: GENRE_PROFILES },
  { id: 'era', name: 'Phong cách thời đại', emoji: '📅', profiles: ERA_PROFILES },
];

/** Lấy hồ sơ quay phim theo ID */
export function getCinematographyProfile(profileId: string): CinematographyProfile | undefined {
  return CINEMATOGRAPHY_PROFILES.find(p => p.id === profileId);
}

/** ID hồ sơ quay phim mặc định */
export const DEFAULT_CINEMATOGRAPHY_PROFILE_ID = 'classic-cinematic';

/**
 * Tạo văn bản hướng dẫn hồ sơ quay phim cho AI hiệu chỉnh
 * Đưa vào system prompt, làm tiêu chuẩn mặc định cho trường điều khiển quay phim
 */
export function buildCinematographyGuidance(profileId: string): string {
  const profile = getCinematographyProfile(profileId);
  if (!profile) return '';

  const { defaultLighting, defaultFocus, defaultRig, defaultAtmosphere, defaultSpeed } = profile;

  const lines = [
    `【🎬 Hồ sơ phong cách quay phim — ${profile.name} (${profile.nameEn})】`,
    `${profile.description}`,
    '',
    '**Tiêu chuẩn quay phim mặc định (từng cảnh có thể điều chỉnh theo nhu cầu kịch bản, nhưng phải có lý do):**',
    `Ánh sáng: ${profile.defaultLighting.style} phong cách + ${profile.defaultLighting.direction} hướng + ${profile.defaultLighting.colorTemperature} nhiệt độ màu`,
    `Tiêu điểm: ${defaultFocus.depthOfField} độ sâu trường ảnh + ${defaultFocus.focusTransition} chuyển nét`,
    `Thiết bị: ${defaultRig.cameraRig} + ${defaultRig.movementSpeed} tốc độ`,
    defaultAtmosphere.effects.length > 0
      ? `Bầu không khí: ${defaultAtmosphere.effects.join('+')} (${defaultAtmosphere.intensity})`
      : 'Bầu không khí: Không có hiệu ứng đặc biệt',
    `Tốc độ: ${defaultSpeed.playbackSpeed}`,
    profile.defaultAngle ? `Góc quay: ${profile.defaultAngle}` : '',
    profile.defaultFocalLength ? `Tiêu cự ống kính: ${profile.defaultFocalLength}` : '',
    profile.defaultTechnique ? `Kỹ thuật quay phim: ${profile.defaultTechnique}` : '',
    '',
    `**Hướng dẫn quay phim:** ${profile.promptGuidance}`,
    '',
    `**Phim tham khảo:** ${profile.referenceFilms.join(', ')}`,
    '',
    '⚠️ Trên đây là tiêu chuẩn ngôn ngữ quay phim của dự án. Trường điều khiển quay phim của mỗi cảnh nên lấy đây làm giá trị mặc định, nhưng nếu chức năng tự sự của kịch bản (như cao trào, bước ngoặt) cần điều chỉnh, có thể tự do thay đổi — điều quan trọng là phải có lý do tự sự, không thay đổi ngẫu nhiên.',
  ].filter(Boolean);

  return lines.join('\n');
}
