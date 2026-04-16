// Copyright (c) 2025 hotflow2024
// Licensed under AGPL-3.0-or-later. See LICENSE for details.
// Commercial licensing available. See COMMERCIAL_LICENSE.md.
"use client";

/**
 * Add Provider Dialog
 * For adding new API providers with platform selection
 */

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import type { IProvider } from "@/lib/api-key-manager";

/**
 * 平台预设配置
 * 1. 魔因API (memefast) - 全功能中转（推荐）
 * 2. RunningHub - 视角切换/多角度生成
 * 3. 自定义 - OpenAI 兼容 API
 */
const PLATFORM_PRESETS: Array<{
  platform: string;
  name: string;
  baseUrl: string;
  description: string;
  services: string[];
  models: string[];
  recommended?: boolean;
}> = [
  {
    platform: "memefast",
    name: "魔因API",
    baseUrl: "https://memefast.top",
    description: "543+ model trung chuyển, hỗ trợ GPT/Claude/Gemini/DeepSeek/Veo/Sora v.v.",
    services: ["Hội thoại", "Tạo ảnh", "Tạo video", "Nhận diện ảnh"],
    models: [
      "deepseek-v3.2",
      "glm-4.7",
      "gemini-3-pro-preview",
      "gemini-3-pro-image-preview",
      "gpt-image-1.5",
      "doubao-seedance-1-5-pro-251215",
      "veo3.1",
      "sora-2-all",
      "wan2.6-i2v",
      "grok-video-3-10s",
      "claude-haiku-4-5-20251001",
    ],
    recommended: true,
  },
  {
    platform: "runninghub",
    name: "RunningHub",
    baseUrl: "https://www.runninghub.cn/openapi/v2",
    description: "Qwen chuyển góc nhìn / tạo đa góc",
    services: ["Chuyển góc nhìn", "Ảnh sang ảnh"],
    models: ["2009613632530812930"],
  },
  {
    platform: "custom",
    name: "Tùy chỉnh",
    baseUrl: "",
    description: "Nhà cung cấp API tương thích OpenAI tùy chỉnh",
    services: [],
    models: [],
  },
];

interface AddProviderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (provider: Omit<IProvider, "id">) => void;
  existingPlatforms?: string[];
}

export function AddProviderDialog({
  open,
  onOpenChange,
  onSubmit,
  existingPlatforms = [],
}: AddProviderDialogProps) {
  const [platform, setPlatform] = useState("");
  const [name, setName] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("");

  // Get selected preset
  const selectedPreset = PLATFORM_PRESETS.find((p) => p.platform === platform);
  const isCustom = platform === "custom";

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      setPlatform("");
      setName("");
      setBaseUrl("");
      setApiKey("");
      setModel("");
    }
  }, [open]);

  // Auto-fill when platform changes
  useEffect(() => {
    if (selectedPreset && !isCustom) {
      setName(selectedPreset.name);
      setBaseUrl(selectedPreset.baseUrl);
      // 自动填充默认模型
      if (selectedPreset.models && selectedPreset.models.length > 0) {
        setModel(selectedPreset.models[0]);
      }
    }
  }, [platform, selectedPreset, isCustom]);

  const handleSubmit = () => {
    if (!platform) {
      toast.error("Vui lòng chọn nền tảng");
      return;
    }
    if (!name.trim()) {
      toast.error("Vui lòng nhập tên");
      return;
    }
    if (isCustom && !baseUrl.trim()) {
      toast.error("Nền tảng tùy chỉnh cần nhập Base URL");
      return;
    }
    if (!apiKey.trim()) {
      toast.error("Vui lòng nhập API Key");
      return;
    }

    // 保存该平台的所有预设模型，确保 provider.model 不为空
    const presetModels = selectedPreset?.models || [];
    const modelArray = presetModels.length > 0 
      ? presetModels 
      : (model ? [model] : []);
    
    onSubmit({
      platform,
      name: name.trim(),
      baseUrl: baseUrl.trim(),
      apiKey: apiKey.trim(),
      model: modelArray,
    });

    onOpenChange(false);
    toast.success(isMemefastAppend ? `Đã thêm Key vào ${name}` : `Đã thêm ${name}`);
  };

  // Filter out already existing platforms (except custom and memefast which allow repeat add)
  const availablePlatforms = PLATFORM_PRESETS.filter(
    (p) => p.platform === "custom" || p.platform === "memefast" || !existingPlatforms.includes(p.platform)
  );
  const isMemefastAppend = platform === "memefast" && existingPlatforms.includes("memefast");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Thêm nhà cung cấp API</DialogTitle>
          <DialogDescription className="hidden">Thêm một nhà cung cấp API mới</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          {/* Platform Selection */}
          <div className="space-y-2">
            <Label>Nền tảng</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn nền tảng" />
              </SelectTrigger>
              <SelectContent>
              {availablePlatforms.map((preset) => (
                  <SelectItem key={preset.platform} value={preset.platform}>
                    <span className="flex items-center gap-2">
                      {preset.name}
                      {preset.recommended && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded font-medium">
                          Đề xuất
                        </span>
                      )}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label>Tên</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tên nhà cung cấp"
            />
          </div>

          {/* Base URL (only for custom or editable) */}
          {(isCustom || platform) && (
            <div className="space-y-2">
              <Label>Base URL {!isCustom && "(tùy chọn sửa đổi)"}</Label>
              <Input
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder={isCustom ? "https://api.example.com/v1" : ""}
              />
            </div>
          )}

          {/* API Key */}
          <div className="space-y-2">
            <Label>API Key</Label>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Nhập API Key"
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">
              Hỗ trợ nhiều Key, phân tách bằng dấu phẩy
            </p>
          </div>

          {/* Model - optional input */}
          <div className="space-y-2">
            <Label>Model (tùy chọn)</Label>
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Nhập tên model, ví dụ gpt-4o"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Hủy
          </Button>
          <Button onClick={handleSubmit}>{isMemefastAppend ? "Thêm Key" : "Thêm"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
